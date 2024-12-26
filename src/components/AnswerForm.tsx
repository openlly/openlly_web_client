import React, { useState, useRef } from 'react';
import { Send, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';
import { gradientClasses } from '../utils/styles';

import { getRandomSuggestion } from '../utils/suggestion';
import {useDebouncer} from '../hooks/useDebouncer';

interface AnswerFormProps {
  questionId: string;
  onSubmit: (answer: string) => void;
}

export function AnswerForm({ questionId, onSubmit }: AnswerFormProps) {
  const [answer, setAnswer] = useState('');
  const [showRandomDice, setShowRandomDice] = useState(false);
  const [scale, setScale] = useState(1);
  const timerRef = useRef<number | null>(null);
  const randomSuggestionLoading = useRef(false);

  const debouncedRandomSuggestion = useDebouncer(
    
    async (questionId: string) => {
      if (randomSuggestionLoading.current) return;
      randomSuggestionLoading.current = true;
      try {
        const suggestion = await getRandomSuggestion(questionId);
        setAnswer(suggestion);
        setShowRandomDice(true);
        setTimeout(() => setShowRandomDice(false), 500);
      } catch (error) {
        console.log(error);
      } finally {
        randomSuggestionLoading.current = false;
      }
    },
    500
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      onSubmit(answer);
      setAnswer('');
    }
  };

  const handleRandomSuggestion = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (!randomSuggestionLoading.current) {
        debouncedRandomSuggestion(questionId);
      }
    }, 500);
  };

  const handleDiceTap = () => {
    if (!randomSuggestionLoading.current) {
      setScale(1.2);
      setTimeout(() => setScale(1), 100);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="w-full animate-fade-in">
        <div className="relative">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your anonymous answer..."
            className="w-full p-3 sm:p-4 pr-24 rounded-xl border border-gray-200 
              focus:border-[#ee0979] focus:ring-2 focus:ring-[#ee0979]/20 
              transition-all resize-none text-sm sm:text-base
              h-24 sm:h-32"
          />
          <div className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3 flex gap-2">
            <button
              type="button"
              onClick={handleRandomSuggestion}
              onMouseOver={() => setShowRandomDice(true)}
              onMouseLeave={() => setShowRandomDice(false)}
              onTouchStart={handleDiceTap}
              className={`p-2 bg-gradient-to-br ${gradientClasses.primary} rounded-lg text-white 
                ${showRandomDice ? '' : 'hover:animate-none'} transition-opacity duration-300
                transform scale-${scale} ${randomSuggestionLoading.current ? 'opacity-50' : ''}`}
              disabled={randomSuggestionLoading.current}
            >
              {showRandomDice ? (
                React.createElement(
                  [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][
                    Math.floor(Math.random() * 6)
                  ],
                  {
                    size: 18,
                    className: 'sm:w-5 sm:h-5 transition duration-300'
                  }
                )
              ) : (
                <Dice5 size={18} className="sm:w-5 sm:h-5 transition duration-300" />
              )}
            </button>
            <button
              type="submit"
              className={`p-2 bg-gradient-to-br ${gradientClasses.primary} rounded-lg text-white 
                hover:animate-pulse hover:opacity-90 transition-opacity duration-300 disabled:opacity-50`}
              disabled={!answer.trim() || randomSuggestionLoading.current}
            >
              <Send size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
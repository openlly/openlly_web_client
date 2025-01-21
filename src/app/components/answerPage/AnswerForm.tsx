"use client";
import React, { useState, useRef } from 'react';
import { Eye, EyeOff,Send, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';
import { useDebouncer } from '../../hooks/useDebouncer';
import { gradientClasses } from '../../utils/styles';
import { HintField } from './HintTextField';
import { AcknowledgmentField } from './AcknowledgmentForm';
import { RevealFields } from './RevealTextField';

interface AnswerFormProps {
  questionId: string;
  onRandomSuggestion: (questionId: string) => Promise<string | null>;
  onSubmit: (data: {
    answer: string;
    hint: string;
    revealName: boolean;
    name?: string;
    revealTime?: string;
    email?: string;
    wantAcknowledgment?: boolean;
  }) => void;
}

export function AnswerForm({ questionId, onSubmit, onRandomSuggestion }: AnswerFormProps) {
  const [answer, setAnswer] = useState('');
  const [showRandomDice, setShowRandomDice] = useState(false);
  const [scale, setScale] = useState(1);
  const timerRef = useRef<number | null>(null);
  const randomSuggestionLoading = useRef(false);
  const [hint, setHint] = useState('');
  const [revealName, setRevealName] = useState(false);
  const [name, setName] = useState('');
  const [revealTime, setRevealTime] = useState('');
  const [email, setEmail] = useState('');
  const [wantAcknowledgment, setWantAcknowledgment] = useState(false);

  const debouncedRandomSuggestion = useDebouncer(
    
    async (questionId: string) => {
      if (randomSuggestionLoading.current) return;
      randomSuggestionLoading.current = true;
      try {
        const suggestion = await  onRandomSuggestion(questionId);
        if(!suggestion) throw new Error('Failed to fetch suggestion');
        setAnswer(suggestion);
        setShowRandomDice(true);
        setTimeout(() => setShowRandomDice(false), 500);
      } catch (error) {
        //ignore
        console.log('Error fetching suggestion:', error);
      } finally {
        randomSuggestionLoading.current = false;
      }
    },
    500
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      onSubmit({
        answer,
        hint,
        revealName,
        ...(wantAcknowledgment && { email, wantAcknowledgment }),
        ...(revealName && {
          name,
          revealTime,
        })
      });      
      resetForm();
       
    }
  };
  function resetForm() {
     // Reset form
     setAnswer('');
     setHint('');
     setRevealName(false);
     setName('');
     setRevealTime('');
     setEmail('');
     setWantAcknowledgment(false);
  }

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
      <form onSubmit={handleSubmit} className="w-full animate-fade-in ">
        <div className="relative">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your anonymous answer..."
            className="w-full p-3 sm:p-4 pr-24 rounded-xl border border-gray-200 
              focus:border-[#ee0979] focus:ring-2 focus:ring-[#ee0979]/20 
              transition-all resize-none text-sm sm:text-base bg-white/80 backdrop-blur-sm
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
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 space-y-4 shadow-lg">
          <HintField 
            value={hint}
            onChange={setHint}
          />

          <AcknowledgmentField
            email={email}
            setEmail={setEmail}
            wantAcknowledgment={wantAcknowledgment}
            setWantAcknowledgment={setWantAcknowledgment}
          />

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setRevealName(!revealName)}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg
                transition-all text-sm
                ${revealName 
                  ? `bg-gradient-to-br from-[#ee0979] to-[#ff6a00] text-white` 
                  : `bg-gray-100 text-gray-600 hover:bg-gray-200`
                }`}
            >
              {revealName ? <Eye size={16} /> : <EyeOff size={16} />}
              {revealName ? 'Reveal my name' : 'Stay anonymous'}
            </button>

            {revealName && (
              <RevealFields
                name={name}
                setName={setName}
                revealTime={revealTime}
                setRevealTime={setRevealTime}
              />
            )}
          </div>
        </div>
       
      </form>
    </div>
  );
}
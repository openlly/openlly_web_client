

import React from 'react';
import { QuestionData } from '@/app/types';
import { appConfig } from '@/app/utils/constants';

const EnhancedBrandedCTASection: React.FC<{ questionData?: QuestionData }> = ({ questionData }) => {
  const defaultQuestionData: QuestionData = {
    id: '1',
    title: 'How do you handle difficult conversations?',
    content: 'I\'m struggling with addressing conflicts at work and would appreciate advice on managing challenging discussions professionally...',
    user: {
      id: '1',
      username: 'Anonymous User',
      createdAt: 'recently',
      profileImg: 'https://github.com/shadcn.png',
    },
    gradient: ['#ee0979', '#ff6a00'],
  };


  const data = questionData || defaultQuestionData;
  const gradientColors = data.gradient || ['#ee0979', '#ff6a00'];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '1200px', 
      height: '630px', 
      background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    }}>
      {/* Header with logo and tagline */}
      <div style={{ 
        padding: '32px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
          </svg>
          <span style={{ fontSize: '36px', fontWeight: 'bold' }}>openlly</span>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Share Anonymously, Connect Openly
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: '0 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h2 style={{ 
            fontSize: '40px', 
            fontWeight: 'bold',
            marginBottom: '24px',
            lineHeight: '1.2',
          }}>
            {data.title}
          </h2>
          <p style={{ 
            fontSize: '24px', 
            marginBottom: '32px',
            opacity: 0.9,
          }}>
            {data.content}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', display: 'flex' }}>
                <img 
                  src={defaultQuestionData.user.profileImg || ""} 
                  alt="Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '24px',display: 'flex', fontWeight: '600' }}>
                  {data.user.username}
                </div>
                <div style={{ fontSize: '18px', display: 'flex', opacity: 0.8 }}>
                  Posted {data.user.createdAt}
                </div>
              </div>
            </div>
            <div style={{ 
              padding: '16px 32px', 
              fontSize: '24px', 
              fontWeight: 'bold',
              background: 'white',
              color: gradientColors[0],
              borderRadius: '32px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              Join the Conversation
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '32px 64px', fontSize: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{appConfig.CLIENT_BASE_URL}</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span>#AnonymousSharing</span>
          <span>#OpenConversations</span>
        </div>
      </div>
    </div>
  );
};

export default EnhancedBrandedCTASection;


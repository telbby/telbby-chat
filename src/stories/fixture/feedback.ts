import type { Feedback } from '@/types/project';

export const feedbackFirst: Feedback = {
  id: 'sadfasdf',
  title: 'BugReport',
  contents: '가끔 음악이 끊겨 재생되는 버그가 있습니다.',
  userName: 'whoami',
};
export const feedbackSecond: Feedback = {
  id: 'sasdedf',
  title: 'Opinion',
  contents:
    '사용자 입장에서 편리하고 너무 좋습니다. 앞으로 다른 버전도 정말 기대가 됩니다.',
  userName: 'jiyong1',
};
export const feedbackThird: Feedback = {
  id: 'asdfasfe',
  title: 'Opinion',
  contents:
    '좌우 스크롤로 피드백을 보는 것보단 캐러셀 형식으로 구현이 되었으면 더 좋을 것 같습니다.',
  userName: 'jonghopark95',
};

export const badFeedback: Feedback = {
  id: 'asdfasdf',
  title: 'badbadbadbadbadbadbadbadbadbadbadbad',
  contents:
    'badbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbad',
  userName:
    'badbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbadbad',
};

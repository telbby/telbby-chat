import telbbyLogo from '../assets/images/logo.png';
import type { Project } from '@/@types/project';

import {
  feedbackFirst,
  feedbackSecond,
  feedbackThird,
  badFeedback,
} from './feedback';

const mockFeedbacks = [
  feedbackFirst,
  feedbackSecond,
  feedbackThird,
  badFeedback,
];

export const mockProejctFirst: Project = {
  name: 'telbby',
  description: `내 프로젝트에,
  간단한 채팅 서비스 하나로
피드백 모아보기`,
  domain: 'asdfasdf',
  image: telbbyLogo,
  primary: false,
  feedbackList: mockFeedbacks,
  totalFeedBackCount: 5,
};

export type Feedback = {
  // @TODO title이 review의 종류라면 몇 가지로 특정지을 필요가 있어보임
  id: string;
  title: string;
  contents: string;
  userName: string;
};

export type Project = {
  name: string;
  description: string;
  domain: string;
  image: string;
  primary: boolean;
  feedbackList: Feedback[];
  totalFeedBackCount: number;
};

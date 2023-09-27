import { Control } from 'react-hook-form';

export interface RatingRowProps {
  positiveReview: number;
  negativeReview: number;
  positivePercentage?: () => void;
  negativePercentage?: () => void;
  type?: 'positive' | 'negative';
}

export interface ReviewForm {
  comment: string;
  rating: 'positive' | 'negative' | null;
}

export interface VotingButtonsProps {
  setValue: (value: 'positive' | 'negative') => void;
  control: Control<ReviewForm>;
}

export interface ValidateVoteModalProps {
  handleClose: () => void;
}

interface CommentsProps {
  userAddress: string;
  commentText: string;
}

export interface ValidatorDetailsProps {
  suiAddress: string;
  name: string;
  apy: string;
  description: string;
  commissionRate: number;
  gasPrice: string;
  imageUrl: string;
  nextEpochGasPrice: string;
  projectUrl: string;
  votingPower: number;
  lstStaked: string;
}

export interface ValidatorsUserActionsProps {
  ranking: number;
  positiveReview: number;
  negativeReview: number;
  comments: ReadonlyArray<CommentsProps>;
}

export interface LeaveACommentProps {
  setValue: (value: string) => void;
}

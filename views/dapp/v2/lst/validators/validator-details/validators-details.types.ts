export interface RatingRowProps {
  positiveReview: number;
  negativeReview: number;
  positivePercentage?: () => void;
  negativePercentage?: () => void;
  type?: 'positive' | 'negative';
}

export interface VotingButtonsProps {
  isPositive: boolean;
  isNegative: boolean;
  setIsPositive: (value: boolean) => void;
  setIsNegative: (value: boolean) => void;
}

export interface ValidateVoteModalProps {
  handleClose: () => void;
}

interface CommentsProps {
  userAddress: string;
  commentText: string;
}

export interface ValidatorDetailsProps {
  ranking: number;
  positiveReview: number;
  negativeReview: number;
  wesite: string;
  address: string;
  validatorName: string;
  validatorDescription: string;
  comments: ReadonlyArray<CommentsProps>;
  activity: {
    totalSuiStaked: number;
    votingPower: number;
    apy: number;
    gasPrice: number;
    commission: number;
    nextEpochGasPrice: number;
  };
}

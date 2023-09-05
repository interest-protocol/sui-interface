export type Pair =
  | 'volatile-SUI/USDCeth'
  | 'volatile-SUI/USDCbnb'
  | 'stable-USDTbnb/USDCbnb'
  | 'volatile-SUI/ETH'
  | 'volatile-SUI/WBTCBbnb'
  | 'volatile-SUI/WBNB'
  | 'volatile-SUI/WETHbnb'
  | 'volatile-SUI/USDTeth'
  | 'volatile-SUI/cUSDCeth'
  | 'stable-USDCeth/USDTeth'
  | 'volatile-SUI/SOL'
  | 'volatile-SUI/cWETHeth'
  | 'volatile-SUI/DOGEbnb'
  | 'volatile-SUI/WFTM'
  | 'volatile-SUI/CELO'
  | 'volatile-SUI/FLOKIbnb'
  | 'volatile-SUI/ADAbnb'
  | 'volatile-SUI/WMATIC'
  | 'volatile-SUI/WAVAX'
  | 'volatile-SUI/USDTbnb'
  | 'volatile-SUI/cWBTCeth'
  | 'stable-USDCeth/USDCbnb';

export const OBJECT_ID_TO_PAIR: Record<string, Pair> = {
  '0x85e87655a47628098b5fc2e62d4926c6384e0430f2eae60cf9c692562b688702':
    'volatile-SUI/USDCeth',
  '0xb05544f109fc1f77e4dbdfd1c42ac1585c52f31984371c677c7a47674de2f8b3':
    'volatile-SUI/USDCbnb',
  '0x8f6c873aa5f680390aae092c4c62e7a755d602a6492eefdc02122400cf34f7e2':
    'stable-USDTbnb/USDCbnb',
  '0x8f41de61cdc1ee379cadd7889dd588fcab62552e48959d027ba1d8839c027771':
    'volatile-SUI/ETH',
  '0xd9856ab45adec800dfa7887815422ac8f55607baeeb4a08b86c5d0ebd6ce1ec7':
    'volatile-SUI/WBTCBbnb',
  '0x8fc0924fda0700bfa3c2a21a71ad02205547673c03bb4c131a6fa15831fec73f':
    'volatile-SUI/WBNB',
  '0x4e66be98b0b6f560d9c9e6ac6845e43a87f7a0f7c22679da992963122616daa8':
    'volatile-SUI/WETHbnb',
  '0x9fc77859750974b84b931d79acfc7116abde230b5dd2bb164331819561b90771':
    'volatile-SUI/USDTeth',
  '0x148968a14fae894eb39397802c3dd1173a3851d239f5d71672a22fb5931d3658':
    'volatile-SUI/cUSDCeth',
  '0x9b7ef251c98bf6990f70f45bfd012de5308483ae2fa0d8e39f559323baacf9ca':
    'stable-USDCeth/USDTeth',
  '0xb5d8ff88e9093847d2bed1c11faa4884aa56f286e662c58f0e1a424939300a1c':
    'volatile-SUI/SOL',
  '0x6506cb8cdd7edac437822881ddfd178ad3a09066d83f505c87999b1e3f595210':
    'volatile-SUI/cWETHeth',
  '0x7fc6556f6dcbdc1e639154eb71d9364f21b0845e944a7c4de7cec11abe1e0554':
    'volatile-SUI/DOGEbnb',
  '0xa8385d3ae4378c610d355085cf01e565ab5c8e3e80d27e32d7b2a93fad7af583':
    'volatile-SUI/WFTM',
  '0x40ffe408f84b562677cfbdc2a081abc3618642d98d8208675dc42a87589a31dd':
    'volatile-SUI/CELO',
  '0x2d5f55761fd1dfdbb078e8d1ed11e1b6a35e162577e8c09eba1cc656c297b6b7':
    'volatile-SUI/FLOKIbnb',
  '0x31186ba7ba3d79e78a21d8282987bae0f78230a755734440bad931a9b06b10f1':
    'volatile-SUI/ADAbnb',
  '0x877a542a5e9e8b5b71b5ff62d37774820fbb2230bea3bb9dec76e25e126e6268':
    'volatile-SUI/WMATIC',
  '0xfadbbca64245714cbd22f85f0d74cdba0a595e585155a2e2223de6e69400c7d2':
    'volatile-SUI/WAVAX',
  '0x7e735695049e3e1e14d86768da12d0465d3b37b797ff6f775bd76225e331d457':
    'volatile-SUI/USDTbnb',
  '0x3604dcc9514a375d0d0a076fdde63ea8890ca59e00d105e52d4de7c32c09b621':
    'volatile-SUI/cWBTCeth',
  '0x7ee34a0ffc65c89e07312928291e6a0bcc8628513c6f3faf32cc4b4d0815ba3a':
    'stable-USDCeth/USDCbnb',
};

export const PAIR_TO_OBJECT_ID: Record<Pair, string> = {
  'volatile-SUI/USDCeth':
    '0x85e87655a47628098b5fc2e62d4926c6384e0430f2eae60cf9c692562b688702',
  'volatile-SUI/USDCbnb':
    '0xb05544f109fc1f77e4dbdfd1c42ac1585c52f31984371c677c7a47674de2f8b3',
  'stable-USDTbnb/USDCbnb':
    '0x8f6c873aa5f680390aae092c4c62e7a755d602a6492eefdc02122400cf34f7e2',
  'volatile-SUI/ETH':
    '0x8f41de61cdc1ee379cadd7889dd588fcab62552e48959d027ba1d8839c027771',
  'volatile-SUI/WBTCBbnb':
    '0xd9856ab45adec800dfa7887815422ac8f55607baeeb4a08b86c5d0ebd6ce1ec7',
  'volatile-SUI/WBNB':
    '0x8fc0924fda0700bfa3c2a21a71ad02205547673c03bb4c131a6fa15831fec73f',
  'volatile-SUI/WETHbnb':
    '0x4e66be98b0b6f560d9c9e6ac6845e43a87f7a0f7c22679da992963122616daa8',
  'volatile-SUI/USDTeth':
    '0x9fc77859750974b84b931d79acfc7116abde230b5dd2bb164331819561b90771',
  'volatile-SUI/cUSDCeth':
    '0x148968a14fae894eb39397802c3dd1173a3851d239f5d71672a22fb5931d3658',
  'stable-USDCeth/USDTeth':
    '0x9b7ef251c98bf6990f70f45bfd012de5308483ae2fa0d8e39f559323baacf9ca',
  'volatile-SUI/SOL':
    '0xb5d8ff88e9093847d2bed1c11faa4884aa56f286e662c58f0e1a424939300a1c',
  'volatile-SUI/cWETHeth':
    '0x6506cb8cdd7edac437822881ddfd178ad3a09066d83f505c87999b1e3f595210',
  'volatile-SUI/DOGEbnb':
    '0x7fc6556f6dcbdc1e639154eb71d9364f21b0845e944a7c4de7cec11abe1e0554',
  'volatile-SUI/WFTM':
    '0xa8385d3ae4378c610d355085cf01e565ab5c8e3e80d27e32d7b2a93fad7af583',
  'volatile-SUI/CELO':
    '0x40ffe408f84b562677cfbdc2a081abc3618642d98d8208675dc42a87589a31dd',
  'volatile-SUI/FLOKIbnb':
    '0x2d5f55761fd1dfdbb078e8d1ed11e1b6a35e162577e8c09eba1cc656c297b6b7',
  'volatile-SUI/ADAbnb':
    '0x31186ba7ba3d79e78a21d8282987bae0f78230a755734440bad931a9b06b10f1',
  'volatile-SUI/WMATIC':
    '0x877a542a5e9e8b5b71b5ff62d37774820fbb2230bea3bb9dec76e25e126e6268',
  'volatile-SUI/WAVAX':
    '0xfadbbca64245714cbd22f85f0d74cdba0a595e585155a2e2223de6e69400c7d2',
  'volatile-SUI/USDTbnb':
    '0x7e735695049e3e1e14d86768da12d0465d3b37b797ff6f775bd76225e331d457',
  'volatile-SUI/cWBTCeth':
    '0x3604dcc9514a375d0d0a076fdde63ea8890ca59e00d105e52d4de7c32c09b621',
  'stable-USDCeth/USDCbnb':
    '0x7ee34a0ffc65c89e07312928291e6a0bcc8628513c6f3faf32cc4b4d0815ba3a',
};

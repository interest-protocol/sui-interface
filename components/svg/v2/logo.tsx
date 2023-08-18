import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Logo: FC<SVGProps & { full?: boolean }> = ({
  maxWidth,
  maxHeight,
  full,
  ...props
}) => {
  const {
    colors: { primary, onSurface },
  } = useTheme() as Theme;

  if (full)
    return (
      <svg style={{ maxWidth, maxHeight }} viewBox="0 0 216 40" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4394 8.77063C15.9641 8.77063 17.2 10.0105 17.2 11.5399V14.3882H14.3606C12.8359 14.3882 11.6 13.1484 11.6 11.619V8.77063H14.4394ZM19.9605 14.3882C18.4359 14.3882 17.2 15.628 17.2 17.1574V20.0057H20.0395C21.5641 20.0057 22.8 18.7659 22.8 17.2365V14.3882H19.9605ZM22.8 11.5399C22.8 10.0105 24.0359 8.77063 25.5605 8.77063H28.4V11.619C28.4 13.1484 27.1641 14.3882 25.6395 14.3882H22.8V11.5399ZM20.0395 25.6233C21.5641 25.6233 22.8 26.8631 22.8 28.3925V31.2409H19.9605C18.4359 31.2409 17.2 30.0011 17.2 28.4717V25.6233H20.0395ZM17.2 22.775C17.2 21.2456 15.9641 20.0057 14.4394 20.0057H11.6V22.8541C11.6 24.3835 12.8359 25.6233 14.3606 25.6233H17.2V22.775ZM25.5605 20.0057C24.0359 20.0057 22.8 21.2456 22.8 22.775V25.6233H25.6395C27.1641 25.6233 28.4 24.3835 28.4 22.8541V20.0057H25.5605ZM28.4 17.1574C28.4 15.628 29.6359 14.3882 31.1605 14.3882H34V17.2365C34 18.7659 32.7641 20.0057 31.2395 20.0057H28.4V17.1574ZM8.83944 14.3882C10.3641 14.3882 11.6 15.628 11.6 17.1574V20.0057H8.76056C7.23595 20.0057 6 18.7659 6 17.2365V14.3882H8.83944Z"
          fill={props.fill || primary}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4803 9.02039C15.9823 9.02039 17.1998 10.2384 17.1998 11.741V14.5393H14.4026C12.9006 14.5393 11.683 13.3213 11.683 11.8187V9.02039H14.4803ZM19.9193 14.5393C18.4174 14.5393 17.1998 15.7574 17.1998 17.2599V20.0582H19.9971C21.499 20.0582 22.7166 18.8402 22.7166 17.3376V14.5393L25.5139 14.5393C27.0158 14.5393 28.2334 13.3213 28.2334 11.8187V9.02039H25.4361C23.9342 9.02039 22.7166 10.2384 22.7166 11.741V14.5393H19.9193ZM19.9971 25.5772C21.499 25.5772 22.7166 26.7952 22.7166 28.2977V31.0961H19.9193C18.4174 31.0961 17.1998 29.878 17.1998 28.3755V25.5772H19.9971ZM11.683 20.0582L8.8858 20.0582C7.38384 20.0582 6.16626 18.8402 6.16626 17.3376V14.5393H8.9635C10.4655 14.5393 11.683 15.7574 11.683 17.2599V20.0582ZM11.683 20.0582V22.8566C11.683 24.3591 12.9006 25.5772 14.4026 25.5772H17.1998V22.7788C17.1998 21.2763 15.9823 20.0582 14.4803 20.0582H11.683ZM25.4361 20.0582C23.9342 20.0582 22.7166 21.2763 22.7166 22.7788V25.5772H25.5139C27.0158 25.5772 28.2334 24.3591 28.2334 22.8566V20.0582L31.0307 20.0582C32.5326 20.0582 33.7502 18.8402 33.7502 17.3376V14.5393H30.9529C29.451 14.5393 28.2334 15.7574 28.2334 17.2599V20.0582H25.4361Z"
          fill={props.fill || primary}
        />
        <path
          d="M48 26.822V13.785H52.3654V26.822H48ZM61.3665 16.4483C62.1434 16.4483 62.8463 16.6097 63.4752 16.9325C64.1041 17.2429 64.5974 17.7334 64.955 18.4038C65.325 19.0743 65.5099 19.9434 65.5099 21.0112V26.822H61.3295V21.7376C61.3295 21.1043 61.2185 20.6574 60.9965 20.3966C60.7746 20.1235 60.4724 19.9869 60.0902 19.9869C59.8065 19.9869 59.5414 20.0552 59.2948 20.1918C59.0605 20.3159 58.8693 20.527 58.7213 20.825C58.5857 21.123 58.5179 21.5265 58.5179 22.0356V26.822H54.3374V16.6345H58.3144V19.6144L57.519 18.7577C57.9137 17.9879 58.4439 17.4105 59.1098 17.0256C59.788 16.6408 60.5403 16.4483 61.3665 16.4483ZM72.2088 27.0082C70.8153 27.0082 69.7301 26.673 68.9532 26.0025C68.1763 25.3197 67.7879 24.2767 67.7879 22.8736V14.3438H71.9683V22.8364C71.9683 23.1468 72.0484 23.3889 72.2088 23.5627C72.3814 23.7366 72.5911 23.8235 72.8377 23.8235C73.1953 23.8235 73.5097 23.7304 73.7811 23.5441L74.78 26.4681C74.4593 26.6544 74.0709 26.791 73.6146 26.8779C73.1707 26.9647 72.702 27.0082 72.2088 27.0082ZM66.4006 20.2663V17.1933H74.0401V20.2663H66.4006ZM81.1488 27.0082C79.9157 27.0082 78.8367 26.7785 77.9118 26.3191C76.9992 25.8598 76.2902 25.2327 75.7846 24.4381C75.2789 23.631 75.0262 22.7247 75.0262 21.7189C75.0262 20.6884 75.2728 19.7758 75.7661 18.9812C76.2717 18.1866 76.9561 17.5657 77.8193 17.1188C78.6949 16.6718 79.6752 16.4483 80.7604 16.4483C81.7593 16.4483 82.6779 16.6469 83.5165 17.0443C84.3674 17.4416 85.0456 18.0313 85.5513 18.8136C86.0692 19.5958 86.3281 20.5642 86.3281 21.7189C86.3281 21.8679 86.3219 22.0356 86.3097 22.2218C86.2973 22.3957 86.285 22.557 86.2727 22.706H78.4852V20.676H84.053L82.4807 21.2161C82.4807 20.8187 82.4067 20.4835 82.2587 20.2104C82.123 19.9248 81.9319 19.7075 81.6853 19.5585C81.4386 19.3972 81.1426 19.3164 80.7974 19.3164C80.4521 19.3164 80.15 19.3972 79.891 19.5585C79.6443 19.7075 79.4533 19.9248 79.3176 20.2104C79.1819 20.4835 79.1141 20.8187 79.1141 21.2161V21.8493C79.1141 22.2839 79.2004 22.6564 79.3731 22.9668C79.5458 23.2771 79.7923 23.5131 80.113 23.6745C80.4336 23.8235 80.8221 23.898 81.2783 23.898C81.747 23.898 82.1292 23.8359 82.4252 23.7117C82.7334 23.5876 83.0541 23.4014 83.387 23.153L85.5697 25.3693C85.0765 25.9032 84.4661 26.3129 83.7385 26.5985C83.0233 26.8716 82.16 27.0082 81.1488 27.0082ZM87.6474 26.822V16.6345H91.6244V19.7075L90.9769 18.8322C91.2852 18.0376 91.7785 17.4416 92.4567 17.0443C93.135 16.6469 93.9488 16.4483 94.8984 16.4483V20.1731C94.7134 20.1483 94.547 20.1296 94.399 20.1173C94.2633 20.1049 94.1215 20.0986 93.9735 20.0986C93.3446 20.0986 92.8267 20.2663 92.4197 20.6015C92.0251 20.9243 91.8278 21.4892 91.8278 22.2963V26.822H87.6474ZM101.579 27.0082C100.346 27.0082 99.2668 26.7785 98.3419 26.3191C97.43 25.8598 96.7205 25.2327 96.215 24.4381C95.7093 23.631 95.4566 22.7247 95.4566 21.7189C95.4566 20.6884 95.7031 19.7758 96.1965 18.9812C96.702 18.1866 97.3865 17.5657 98.2494 17.1188C99.1253 16.6718 100.106 16.4483 101.191 16.4483C102.189 16.4483 103.109 16.6469 103.947 17.0443C104.798 17.4416 105.476 18.0313 105.981 18.8136C106.499 19.5958 106.758 20.5642 106.758 21.7189C106.758 21.8679 106.753 22.0356 106.74 22.2218C106.728 22.3957 106.716 22.557 106.703 22.706H98.9153V20.676H104.483L102.911 21.2161C102.911 20.8187 102.837 20.4835 102.689 20.2104C102.554 19.9248 102.362 19.7075 102.115 19.5585C101.869 19.3972 101.573 19.3164 101.228 19.3164C100.883 19.3164 100.58 19.3972 100.321 19.5585C100.075 19.7075 99.8837 19.9248 99.7477 20.2104C99.6127 20.4835 99.5443 20.8187 99.5443 21.2161V21.8493C99.5443 22.2839 99.6312 22.6564 99.8032 22.9668C99.9762 23.2771 100.223 23.5131 100.543 23.6745C100.864 23.8235 101.252 23.898 101.708 23.898C102.177 23.898 102.559 23.8359 102.855 23.7117C103.164 23.5876 103.484 23.4014 103.817 23.153L106 25.3693C105.507 25.9032 104.897 26.3129 104.169 26.5985C103.454 26.8716 102.591 27.0082 101.579 27.0082ZM112.037 27.0082C111.173 27.0082 110.322 26.9151 109.484 26.7289C108.645 26.5426 107.967 26.3005 107.449 26.0025L108.596 23.2275C109.077 23.5131 109.632 23.7366 110.261 23.898C110.902 24.0594 111.524 24.1401 112.129 24.1401C112.634 24.1401 112.973 24.0966 113.146 24.0097C113.331 23.9228 113.424 23.8049 113.424 23.6559C113.424 23.5069 113.318 23.4014 113.109 23.3393C112.899 23.2648 112.622 23.2089 112.277 23.1716C111.931 23.1344 111.549 23.0909 111.13 23.0413C110.723 22.9792 110.31 22.8923 109.891 22.7805C109.471 22.6688 109.089 22.5012 108.744 22.2777C108.398 22.0542 108.121 21.7562 107.912 21.3837C107.702 20.9988 107.597 20.5146 107.597 19.931C107.597 19.2854 107.788 18.7018 108.171 18.1803C108.565 17.6589 109.144 17.2429 109.909 16.9325C110.686 16.6097 111.642 16.4483 112.776 16.4483C113.516 16.4483 114.256 16.5165 114.996 16.6532C115.736 16.7898 116.371 17.0008 116.901 17.2864L115.755 20.0614C115.237 19.7758 114.724 19.5834 114.219 19.484C113.725 19.3723 113.263 19.3164 112.832 19.3164C112.301 19.3164 111.938 19.3661 111.741 19.4654C111.556 19.5648 111.463 19.6765 111.463 19.8007C111.463 19.9496 111.568 20.0614 111.778 20.1359C111.987 20.2104 112.264 20.2663 112.61 20.3035C112.955 20.3408 113.331 20.3904 113.738 20.4525C114.157 20.5021 114.571 20.5891 114.978 20.7132C115.397 20.825 115.779 20.9926 116.124 21.2161C116.469 21.4396 116.747 21.7438 116.957 22.1287C117.166 22.5012 117.271 22.9792 117.271 23.5627C117.271 24.1711 117.08 24.7423 116.698 25.2762C116.315 25.7977 115.736 26.2198 114.959 26.5426C114.182 26.853 113.207 27.0082 112.037 27.0082ZM123.42 27.0082C122.027 27.0082 120.941 26.673 120.164 26.0025C119.387 25.3197 118.999 24.2767 118.999 22.8736V14.3438H123.179V22.8364C123.179 23.1468 123.26 23.3889 123.42 23.5627C123.593 23.7366 123.803 23.8235 124.049 23.8235C124.407 23.8235 124.721 23.7304 124.992 23.5441L125.991 26.4681C125.671 26.6544 125.283 26.791 124.826 26.8779C124.382 26.9647 123.914 27.0082 123.42 27.0082ZM117.612 20.2663V17.1933H125.251V20.2663H117.612ZM132.72 26.822V13.785H138.954C140.162 13.785 141.204 13.9837 142.08 14.381C142.968 14.7783 143.652 15.3495 144.133 16.0944C144.614 16.827 144.855 17.6961 144.855 18.7018C144.855 19.7075 144.614 20.5766 144.133 21.3092C143.652 22.0418 142.968 22.6129 142.08 23.0226C141.204 23.42 140.162 23.6186 138.954 23.6186H135.144L137.086 21.7376V26.822H132.72ZM137.086 22.2218L135.144 20.229H138.677C139.281 20.229 139.725 20.0924 140.008 19.8193C140.304 19.5462 140.452 19.1737 140.452 18.7018C140.452 18.23 140.304 17.8575 140.008 17.5844C139.725 17.3112 139.281 17.1746 138.677 17.1746H135.144L137.086 15.1818V22.2218ZM146.337 26.822V16.6345H150.314V19.7075L149.667 18.8322C149.975 18.0376 150.469 17.4416 151.147 17.0443C151.825 16.6469 152.639 16.4483 153.588 16.4483V20.1731C153.403 20.1483 153.237 20.1296 153.089 20.1173C152.953 20.1049 152.812 20.0986 152.664 20.0986C152.035 20.0986 151.517 20.2663 151.11 20.6015C150.715 20.9243 150.518 21.4892 150.518 22.2963V26.822H146.337ZM160.028 27.0082C158.882 27.0082 157.864 26.7847 156.976 26.3378C156.101 25.8784 155.41 25.2513 154.905 24.4567C154.4 23.6621 154.146 22.7495 154.146 21.7189C154.146 20.6884 154.4 19.7758 154.905 18.9812C155.41 18.1866 156.101 17.5657 156.976 17.1188C157.864 16.6718 158.882 16.4483 160.028 16.4483C161.175 16.4483 162.193 16.6718 163.08 17.1188C163.968 17.5657 164.659 18.1866 165.152 18.9812C165.658 19.7758 165.911 20.6884 165.911 21.7189C165.911 22.7495 165.658 23.6621 165.152 24.4567C164.659 25.2513 163.968 25.8784 163.08 26.3378C162.193 26.7847 161.175 27.0082 160.028 27.0082ZM160.028 23.7304C160.337 23.7304 160.615 23.6559 160.861 23.5069C161.108 23.3579 161.305 23.1344 161.453 22.8364C161.601 22.526 161.675 22.1535 161.675 21.7189C161.675 21.272 161.601 20.9057 161.453 20.6201C161.305 20.3221 161.108 20.0986 160.861 19.9496C160.615 19.8007 160.337 19.7262 160.028 19.7262C159.72 19.7262 159.443 19.8007 159.196 19.9496C158.95 20.0986 158.752 20.3221 158.604 20.6201C158.456 20.9057 158.382 21.272 158.382 21.7189C158.382 22.1535 158.456 22.526 158.604 22.8364C158.752 23.1344 158.95 23.3579 159.196 23.5069C159.443 23.6559 159.72 23.7304 160.028 23.7304ZM172.103 27.0082C170.709 27.0082 169.624 26.673 168.847 26.0025C168.07 25.3197 167.682 24.2767 167.682 22.8736V14.3438H171.862V22.8364C171.862 23.1468 171.943 23.3889 172.103 23.5627C172.276 23.7366 172.485 23.8235 172.732 23.8235C173.089 23.8235 173.404 23.7304 173.675 23.5441L174.674 26.4681C174.353 26.6544 173.964 26.791 173.508 26.8779C173.064 26.9647 172.596 27.0082 172.103 27.0082ZM166.294 20.2663V17.1933H173.934V20.2663H166.294ZM180.802 27.0082C179.655 27.0082 178.638 26.7847 177.75 26.3378C176.875 25.8784 176.184 25.2513 175.678 24.4567C175.173 23.6621 174.92 22.7495 174.92 21.7189C174.92 20.6884 175.173 19.7758 175.678 18.9812C176.184 18.1866 176.875 17.5657 177.75 17.1188C178.638 16.6718 179.655 16.4483 180.802 16.4483C181.949 16.4483 182.966 16.6718 183.854 17.1188C184.742 17.5657 185.433 18.1866 185.926 18.9812C186.432 19.7758 186.684 20.6884 186.684 21.7189C186.684 22.7495 186.432 23.6621 185.926 24.4567C185.433 25.2513 184.742 25.8784 183.854 26.3378C182.966 26.7847 181.949 27.0082 180.802 27.0082ZM180.802 23.7304C181.111 23.7304 181.388 23.6559 181.634 23.5069C181.881 23.3579 182.078 23.1344 182.226 22.8364C182.374 22.526 182.448 22.1535 182.448 21.7189C182.448 21.272 182.374 20.9057 182.226 20.6201C182.078 20.3221 181.881 20.0986 181.634 19.9496C181.388 19.8007 181.111 19.7262 180.802 19.7262C180.494 19.7262 180.217 19.8007 179.97 19.9496C179.724 20.0986 179.526 20.3221 179.378 20.6201C179.23 20.9057 179.156 21.272 179.156 21.7189C179.156 22.1535 179.23 22.526 179.378 22.8364C179.526 23.1344 179.724 23.3579 179.97 23.5069C180.217 23.6559 180.494 23.7304 180.802 23.7304ZM193.431 27.0082C192.272 27.0082 191.242 26.7847 190.342 26.3378C189.442 25.8908 188.733 25.2699 188.215 24.4753C187.709 23.6683 187.456 22.7495 187.456 21.7189C187.456 20.6884 187.709 19.7758 188.215 18.9812C188.733 18.1866 189.442 17.5657 190.342 17.1188C191.242 16.6718 192.272 16.4483 193.431 16.4483C194.664 16.4483 195.718 16.7153 196.594 17.2491C197.47 17.783 198.074 18.5218 198.407 19.4654L195.17 21.0671C194.96 20.5953 194.701 20.2539 194.393 20.0428C194.097 19.8317 193.771 19.7262 193.413 19.7262C193.105 19.7262 192.814 19.8007 192.543 19.9496C192.284 20.0986 192.074 20.3221 191.914 20.6201C191.766 20.9057 191.692 21.272 191.692 21.7189C191.692 22.1659 191.766 22.5384 191.914 22.8364C192.074 23.1344 192.284 23.3579 192.543 23.5069C192.814 23.6559 193.105 23.7304 193.413 23.7304C193.771 23.7304 194.097 23.6249 194.393 23.4138C194.701 23.2026 194.96 22.8613 195.17 22.3894L198.407 23.9911C198.074 24.9347 197.47 25.6735 196.594 26.2074C195.718 26.7413 194.664 27.0082 193.431 27.0082ZM204.629 27.0082C203.482 27.0082 202.464 26.7847 201.577 26.3378C200.701 25.8784 200.011 25.2513 199.505 24.4567C198.999 23.6621 198.746 22.7495 198.746 21.7189C198.746 20.6884 198.999 19.7758 199.505 18.9812C200.011 18.1866 200.701 17.5657 201.577 17.1188C202.464 16.6718 203.482 16.4483 204.629 16.4483C205.775 16.4483 206.793 16.6718 207.681 17.1188C208.569 17.5657 209.259 18.1866 209.752 18.9812C210.258 19.7758 210.511 20.6884 210.511 21.7189C210.511 22.7495 210.258 23.6621 209.752 24.4567C209.259 25.2513 208.569 25.8784 207.681 26.3378C206.793 26.7847 205.775 27.0082 204.629 27.0082ZM204.629 23.7304C204.937 23.7304 205.214 23.6559 205.461 23.5069C205.708 23.3579 205.905 23.1344 206.053 22.8364C206.201 22.526 206.275 22.1535 206.275 21.7189C206.275 21.272 206.201 20.9057 206.053 20.6201C205.905 20.3221 205.708 20.0986 205.461 19.9496C205.214 19.8007 204.937 19.7262 204.629 19.7262C204.321 19.7262 204.043 19.8007 203.796 19.9496C203.549 20.0986 203.352 20.3221 203.204 20.6201C203.056 20.9057 202.982 21.272 202.982 21.7189C202.982 22.1535 203.056 22.526 203.204 22.8364C203.352 23.1344 203.549 23.3579 203.796 23.5069C204.043 23.6559 204.321 23.7304 204.629 23.7304ZM211.82 26.822V13.0028H216V26.822H211.82Z"
          fill={onSurface}
        />
      </svg>
    );

  return (
    <svg style={{ maxWidth, maxHeight }} viewBox="0 0 28 23" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48029 0.0203857C9.98226 0.0203857 11.1998 1.23844 11.1998 2.74098V5.53931H8.40259C6.90063 5.53931 5.68305 4.32126 5.68305 2.81872V0.0203857H8.48029ZM13.9193 5.53931C12.4174 5.53931 11.1998 6.75735 11.1998 8.25989V11.0582H13.9971C15.499 11.0582 16.7166 9.84017 16.7166 8.33763V5.53931L19.5139 5.53931C21.0158 5.53931 22.2334 4.32126 22.2334 2.81872V0.0203857H19.4361C17.9342 0.0203857 16.7166 1.23844 16.7166 2.74098V5.53931H13.9193ZM13.9971 16.5772C15.499 16.5772 16.7166 17.7952 16.7166 19.2977V22.0961H13.9193C12.4174 22.0961 11.1998 20.878 11.1998 19.3755V16.5772H13.9971ZM5.68305 11.0582L2.8858 11.0582C1.38384 11.0582 0.16626 9.84017 0.16626 8.33763V5.53931H2.9635C4.46546 5.53931 5.68305 6.75735 5.68305 8.25989V11.0582ZM5.68305 11.0582V13.8566C5.68305 15.3591 6.90063 16.5772 8.40259 16.5772H11.1998V13.7788C11.1998 12.2763 9.98226 11.0582 8.48029 11.0582H5.68305ZM19.4361 11.0582C17.9342 11.0582 16.7166 12.2763 16.7166 13.7788V16.5772H19.5139C21.0158 16.5772 22.2334 15.3591 22.2334 13.8566V11.0582L25.0307 11.0582C26.5326 11.0582 27.7502 9.84017 27.7502 8.33763V5.53931H24.9529C23.451 5.53931 22.2334 6.75735 22.2334 8.25989V11.0582H19.4361Z"
        fill={props.fill || primary}
      />
    </svg>
  );
};

export default Logo;

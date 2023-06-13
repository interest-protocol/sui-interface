import { FC } from 'react';

import { SVGProps } from '../svg.types';

const WormholeADABSC: FC<SVGProps & { filled?: boolean }> = ({
  maxWidth,
  maxHeight,
  filled,
  ...props
}) =>
  filled ? (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 5.79086 5.79086 4 8 4H40C42.2091 4 44 5.79086 44 8V25.0411C43.6703 25.0139 43.3368 25 43 25C36.3726 25 31 30.3726 31 37C31 39.6124 31.8348 42.0298 33.2521 44H8C5.79086 44 4 42.2091 4 40V8Z"
        fill="#BFDBFE"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#F8D12F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.088 35.8028L43.0014 32.8907L45.9159 35.8052L47.6102 34.1098L43.0014 29.5L38.3926 34.1086L40.088 35.8028ZM35.5 37.0002L37.1948 35.3055L38.8896 37.0002L37.1948 38.695L35.5 37.0002ZM43.0013 41.1104L40.0879 38.1971L38.3902 39.8901L38.3925 39.8925L43.0013 44.4999L47.6101 39.8901L47.6113 39.8889L45.9159 38.1959L43.0013 41.1104ZM47.1104 37.0007L48.8052 35.3059L50.5 37.0007L48.8052 38.6954L47.1104 37.0007ZM43.0014 35.2791L44.7205 36.9994H44.7217L44.7205 37.0006L43.0014 38.7208L41.2823 37.0029L41.2799 36.9994L41.2823 36.997L41.5832 36.6961L41.7301 36.5504L43.0014 35.2791Z"
        fill="#131316"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.8296 19.4398C23.1032 19.4398 23.3708 19.521 23.5983 19.6731C23.8258 19.8252 24.0032 20.0413 24.1079 20.2942C24.2126 20.5471 24.24 20.8253 24.1865 21.0937C24.1331 21.3621 24.0013 21.6087 23.8078 21.8022C23.6142 21.9957 23.3677 22.1275 23.0992 22.1809C22.8308 22.2342 22.5526 22.2068 22.2997 22.1021C22.0469 21.9973 21.8308 21.82 21.6787 21.5924C21.5267 21.3648 21.4455 21.0973 21.4455 20.8236C21.4456 20.4566 21.5914 20.1046 21.851 19.8451C22.1105 19.5856 22.4625 19.4398 22.8296 19.4398ZM26.1705 19.4398C26.4442 19.4399 26.7117 19.5211 26.9393 19.6732C27.1668 19.8253 27.3441 20.0414 27.4488 20.2943C27.5535 20.5471 27.5808 20.8254 27.5274 21.0938C27.474 21.3622 27.3422 21.6087 27.1486 21.8022C26.9551 21.9957 26.7085 22.1275 26.4401 22.1809C26.1716 22.2342 25.8934 22.2068 25.6406 22.1021C25.3877 21.9973 25.1716 21.82 25.0196 21.5924C24.8676 21.3648 24.7864 21.0973 24.7864 20.8236C24.7865 20.4566 24.9323 20.1046 25.1919 19.8451C25.4515 19.5855 25.8035 19.4398 26.1705 19.4398ZM26.1705 25.2614C26.4442 25.2615 26.7117 25.3427 26.9393 25.4948C27.1668 25.6469 27.3441 25.863 27.4488 26.1159C27.5535 26.3688 27.5808 26.647 27.5274 26.9154C27.474 27.1838 27.3422 27.4304 27.1486 27.6239C26.9551 27.8174 26.7085 27.9491 26.4401 28.0025C26.1716 28.0559 25.8934 28.0284 25.6406 27.9237C25.3877 27.8189 25.1716 27.6416 25.0196 27.414C24.8676 27.1865 24.7864 26.9189 24.7864 26.6452C24.7864 26.4635 24.8222 26.2835 24.8918 26.1156C24.9614 25.9477 25.0633 25.7951 25.1919 25.6666C25.3204 25.5381 25.473 25.4362 25.6409 25.3667C25.8088 25.2972 25.9888 25.2614 26.1705 25.2614ZM22.8296 25.2614C23.1032 25.2615 23.3708 25.3427 23.5983 25.4947C23.8258 25.6468 24.0032 25.863 24.1079 26.1158C24.2126 26.3687 24.24 26.6469 24.1865 26.9153C24.1331 27.1838 24.0013 27.4303 23.8078 27.6238C23.6142 27.8173 23.3677 27.9491 23.0992 28.0025C22.8308 28.0559 22.5526 28.0284 22.2997 27.9237C22.0469 27.819 21.8308 27.6416 21.6787 27.414C21.5267 27.1865 21.4455 26.9189 21.4455 26.6452C21.4455 26.4635 21.4813 26.2835 21.5509 26.1156C21.6205 25.9477 21.7224 25.7952 21.8509 25.6667C21.9795 25.5382 22.132 25.4363 22.2999 25.3667C22.4679 25.2972 22.6478 25.2614 22.8296 25.2614ZM21.1114 22.3983C21.3851 22.3983 21.6526 22.4795 21.8801 22.6316C22.1077 22.7837 22.285 22.9998 22.3897 23.2527C22.4944 23.5056 22.5218 23.7838 22.4684 24.0522C22.4149 24.3206 22.2831 24.5672 22.0896 24.7607C21.8961 24.9542 21.6495 25.086 21.3811 25.1394C21.1126 25.1927 20.8344 25.1653 20.5815 25.0606C20.3287 24.9558 20.1126 24.7785 19.9605 24.5509C19.8085 24.3233 19.7273 24.0558 19.7273 23.7821C19.7274 23.4151 19.8732 23.0631 20.1328 22.8036C20.3923 22.5441 20.7443 22.3983 21.1114 22.3983ZM27.8887 22.3983C28.1624 22.3984 28.4299 22.4796 28.6574 22.6317C28.885 22.7838 29.0623 22.9999 29.167 23.2528C29.2717 23.5056 29.299 23.7839 29.2456 24.0523C29.1922 24.3207 29.0603 24.5672 28.8668 24.7607C28.6732 24.9542 28.4267 25.086 28.1582 25.1394C27.8898 25.1927 27.6116 25.1653 27.3588 25.0606C27.1059 24.9558 26.8898 24.7785 26.7378 24.5509C26.5857 24.3233 26.5046 24.0558 26.5046 23.7821C26.5046 23.6004 26.5404 23.4204 26.61 23.2525C26.6795 23.0846 26.7815 22.932 26.91 22.8035C27.0386 22.675 27.1912 22.5731 27.3591 22.5036C27.527 22.434 27.707 22.3983 27.8887 22.3983ZM29.4637 20.0125C29.6336 20.0125 29.7997 20.0629 29.9409 20.1573C30.0821 20.2518 30.1921 20.3859 30.2571 20.5429C30.3221 20.6998 30.3391 20.8725 30.3059 21.0391C30.2727 21.2057 30.1909 21.3587 30.0708 21.4788C29.9507 21.5989 29.7976 21.6807 29.631 21.7138C29.4644 21.747 29.2917 21.73 29.1348 21.6649C28.9778 21.5999 28.8437 21.4898 28.7493 21.3486C28.655 21.2073 28.6046 21.0413 28.6046 20.8714C28.6046 20.7586 28.6268 20.6469 28.67 20.5427C28.7132 20.4384 28.7765 20.3437 28.8562 20.264C28.936 20.1842 29.0307 20.121 29.135 20.0778C29.2392 20.0346 29.3509 20.0125 29.4637 20.0125ZM29.4637 25.7385C29.6336 25.7386 29.7997 25.789 29.9409 25.8834C30.0821 25.9778 30.1921 26.1119 30.2571 26.2689C30.3221 26.4258 30.3391 26.5985 30.3059 26.7651C30.2727 26.9317 30.1909 27.0848 30.0708 27.2049C29.9507 27.325 29.7976 27.4068 29.631 27.4399C29.4644 27.473 29.2917 27.456 29.1348 27.391C28.9778 27.3259 28.8437 27.2159 28.7493 27.0746C28.655 26.9334 28.6046 26.7673 28.6046 26.5974C28.6046 26.4846 28.6268 26.3729 28.67 26.2687C28.7132 26.1645 28.7765 26.0698 28.8562 25.99C28.936 25.9102 29.0307 25.847 29.135 25.8038C29.2392 25.7607 29.3509 25.7385 29.4637 25.7385ZM19.5364 25.7385C19.7062 25.7385 19.8723 25.7889 20.0135 25.8833C20.1548 25.9777 20.2648 26.1119 20.3298 26.2688C20.3948 26.4258 20.4118 26.5985 20.3787 26.7651C20.3455 26.9317 20.2637 27.0847 20.1436 27.2048C20.0235 27.3249 19.8704 27.4067 19.7038 27.4399C19.5372 27.473 19.3645 27.456 19.2075 27.391C19.0506 27.326 18.9165 27.2159 18.8221 27.0746C18.7277 26.9334 18.6773 26.7673 18.6773 26.5974C18.6774 26.3696 18.7679 26.1512 18.929 25.9901C19.0901 25.829 19.3086 25.7385 19.5364 25.7385ZM19.5364 20.0125C19.7062 20.0125 19.8723 20.0629 20.0135 20.1573C20.1548 20.2517 20.2648 20.3858 20.3298 20.5428C20.3948 20.6997 20.4118 20.8724 20.3787 21.039C20.3455 21.2057 20.2637 21.3587 20.1436 21.4788C20.0235 21.5989 19.8704 21.6807 19.7038 21.7138C19.5372 21.747 19.3645 21.73 19.2075 21.6649C19.0506 21.5999 18.9165 21.4898 18.8221 21.3486C18.7277 21.2073 18.6773 21.0413 18.6773 20.8714C18.6774 20.6436 18.7679 20.4251 18.929 20.2641C19.0901 20.103 19.3086 20.0125 19.5364 20.0125ZM24.5001 17.1494C24.6699 17.1494 24.836 17.1998 24.9772 17.2942C25.1184 17.3886 25.2285 17.5228 25.2934 17.6797C25.3584 17.8367 25.3754 18.0094 25.3422 18.176C25.3091 18.3426 25.2272 18.4956 25.1071 18.6157C24.987 18.7358 24.8339 18.8176 24.6673 18.8507C24.5007 18.8838 24.328 18.8668 24.1711 18.8018C24.0142 18.7368 23.88 18.6267 23.7856 18.4855C23.6913 18.3442 23.6409 18.1782 23.6409 18.0083C23.6409 17.8955 23.6631 17.7838 23.7063 17.6795C23.7495 17.5753 23.8128 17.4806 23.8926 17.4009C23.9723 17.3211 24.0671 17.2578 24.1713 17.2147C24.2755 17.1715 24.3872 17.1493 24.5001 17.1494ZM24.5001 28.6016C24.6699 28.6017 24.836 28.6521 24.9772 28.7465C25.1184 28.8409 25.2285 28.9751 25.2934 29.132C25.3584 29.289 25.3754 29.4617 25.3422 29.6283C25.3091 29.7949 25.2272 29.9479 25.1071 30.068C24.987 30.1881 24.8339 30.2699 24.6673 30.303C24.5007 30.3361 24.328 30.3191 24.1711 30.2541C24.0142 30.1891 23.88 30.079 23.7856 29.9377C23.6913 29.7965 23.6409 29.6304 23.6409 29.4606C23.6409 29.3478 23.6631 29.236 23.7063 29.1318C23.7495 29.0276 23.8128 28.9329 23.8926 28.8531C23.9723 28.7734 24.0671 28.7101 24.1713 28.667C24.2755 28.6238 24.3872 28.6016 24.5001 28.6016ZM28.1751 29.4606C28.3166 29.4606 28.455 29.5026 28.5727 29.5813C28.6903 29.66 28.782 29.7718 28.8362 29.9026C28.8903 30.0334 28.9045 30.1773 28.8768 30.3161C28.8492 30.4549 28.781 30.5824 28.6809 30.6825C28.5808 30.7826 28.4532 30.8507 28.3144 30.8783C28.1756 30.9059 28.0317 30.8917 27.9009 30.8376C27.7701 30.7834 27.6584 30.6917 27.5797 30.5739C27.5011 30.4562 27.4591 30.3179 27.4591 30.1763C27.4591 30.0823 27.4776 29.9892 27.5136 29.9024C27.5496 29.8155 27.6023 29.7366 27.6688 29.6701C27.7353 29.6037 27.8142 29.5509 27.9011 29.515C27.988 29.479 28.0811 29.4605 28.1751 29.4606ZM20.825 29.4606C20.9666 29.4606 21.105 29.5026 21.2226 29.5813C21.3403 29.66 21.432 29.7718 21.4862 29.9026C21.5403 30.0334 21.5544 30.1773 21.5268 30.3161C21.4991 30.4549 21.431 30.5824 21.3309 30.6825C21.2307 30.7826 21.1032 30.8507 20.9644 30.8783C20.8255 30.9059 20.6816 30.8917 20.5509 30.8376C20.4201 30.7834 20.3083 30.6917 20.2297 30.5739C20.151 30.4562 20.1091 30.3179 20.1091 30.1763C20.1091 30.0823 20.1276 29.9892 20.1636 29.9024C20.1996 29.8155 20.2523 29.7366 20.3188 29.6701C20.3853 29.6037 20.4642 29.5509 20.5511 29.515C20.6379 29.479 20.731 29.4605 20.825 29.4606ZM20.825 16.5768C20.9666 16.5768 21.105 16.6188 21.2226 16.6975C21.3403 16.7762 21.432 16.888 21.4862 17.0188C21.5403 17.1496 21.5544 17.2935 21.5268 17.4323C21.4991 17.5711 21.431 17.6986 21.3309 17.7987C21.2307 17.8988 21.1032 17.967 20.9644 17.9946C20.8255 18.0222 20.6816 18.008 20.5509 17.9538C20.4201 17.8996 20.3083 17.8079 20.2297 17.6902C20.151 17.5725 20.1091 17.4341 20.1091 17.2925C20.1091 17.1985 20.1276 17.1054 20.1636 17.0186C20.1996 16.9317 20.2523 16.8528 20.3188 16.7863C20.3853 16.7199 20.4642 16.6672 20.5511 16.6312C20.6379 16.5952 20.731 16.5768 20.825 16.5768ZM28.1751 16.5768C28.3166 16.5768 28.455 16.6188 28.5727 16.6975C28.6903 16.7762 28.782 16.888 28.8362 17.0188C28.8903 17.1496 28.9045 17.2935 28.8768 17.4323C28.8492 17.5711 28.781 17.6986 28.6809 17.7987C28.5808 17.8988 28.4532 17.967 28.3144 17.9946C28.1756 18.0222 28.0317 18.008 27.9009 17.9538C27.7701 17.8996 27.6584 17.8079 27.5797 17.6902C27.5011 17.5725 27.4591 17.4341 27.4591 17.2925C27.4591 17.1985 27.4776 17.1054 27.5136 17.0186C27.5496 16.9317 27.6023 16.8528 27.6688 16.7863C27.7353 16.7199 27.8142 16.6672 27.9011 16.6312C27.988 16.5952 28.0811 16.5768 28.1751 16.5768ZM31.8978 22.971C32.0393 22.971 32.1777 23.013 32.2954 23.0917C32.4131 23.1703 32.5048 23.2821 32.559 23.4129C32.6131 23.5437 32.6273 23.6876 32.5997 23.8264C32.572 23.9653 32.5039 24.0928 32.4037 24.1929C32.3036 24.293 32.1761 24.3611 32.0373 24.3887C31.8984 24.4164 31.7545 24.4022 31.6237 24.348C31.493 24.2938 31.3812 24.2021 31.3025 24.0844C31.2239 23.9667 31.1819 23.8283 31.1819 23.6867C31.1819 23.4969 31.2574 23.3148 31.3916 23.1806C31.5259 23.0464 31.7079 22.971 31.8978 22.971ZM17.1022 22.971C17.2438 22.971 17.3822 23.013 17.4998 23.0917C17.6175 23.1703 17.7093 23.2821 17.7634 23.4129C17.8176 23.5437 17.8317 23.6876 17.8041 23.8264C17.7765 23.9653 17.7083 24.0928 17.6082 24.1929C17.5081 24.293 17.3805 24.3611 17.2417 24.3887C17.1029 24.4164 16.959 24.4022 16.8282 24.348C16.6974 24.2938 16.5856 24.2021 16.507 24.0844C16.4283 23.9667 16.3864 23.8283 16.3864 23.6867C16.3864 23.5927 16.4049 23.4997 16.4408 23.4128C16.4768 23.326 16.5296 23.2471 16.596 23.1806C16.6625 23.1141 16.7414 23.0614 16.8283 23.0254C16.9151 22.9895 17.0082 22.971 17.1022 22.971ZM16.5772 18.5809C16.6905 18.5809 16.8012 18.6145 16.8954 18.6774C16.9896 18.7403 17.063 18.8298 17.1063 18.9344C17.1497 19.0391 17.161 19.1542 17.1389 19.2653C17.1168 19.3764 17.0622 19.4785 16.9821 19.5585C16.902 19.6386 16.8 19.6932 16.6889 19.7153C16.5778 19.7373 16.4626 19.726 16.358 19.6826C16.2533 19.6393 16.1639 19.5658 16.101 19.4716C16.0381 19.3775 16.0045 19.2667 16.0045 19.1534C16.0046 19.0016 16.0649 18.8559 16.1723 18.7486C16.2797 18.6412 16.4253 18.5809 16.5772 18.5809ZM16.5772 27.7427C16.6905 27.7427 16.8012 27.7763 16.8954 27.8392C16.9896 27.9022 17.063 27.9916 17.1063 28.0963C17.1497 28.2009 17.161 28.3161 17.1389 28.4272C17.1168 28.5383 17.0622 28.6403 16.9821 28.7204C16.902 28.8005 16.8 28.855 16.6889 28.8771C16.5778 28.8992 16.4626 28.8878 16.358 28.8445C16.2533 28.8011 16.1639 28.7277 16.101 28.6335C16.0381 28.5393 16.0045 28.4286 16.0045 28.3153C16.0046 28.1634 16.0649 28.0178 16.1723 27.9104C16.2797 27.803 16.4253 27.7427 16.5772 27.7427ZM32.4228 27.7427C32.5361 27.7427 32.6468 27.7763 32.741 27.8392C32.8351 27.9022 32.9085 27.9916 32.9519 28.0963C32.9952 28.2009 33.0066 28.3161 32.9845 28.4272C32.9624 28.5383 32.9078 28.6403 32.8277 28.7204C32.7476 28.8005 32.6455 28.855 32.5344 28.8771C32.4233 28.8992 32.3082 28.8878 32.2035 28.8445C32.0989 28.8011 32.0095 28.7277 31.9466 28.6335C31.8836 28.5393 31.8501 28.4286 31.8501 28.3153C31.8501 28.1634 31.9105 28.0178 32.0179 27.9104C32.1253 27.803 32.2709 27.7427 32.4228 27.7427ZM32.4228 18.5809C32.5361 18.5809 32.6468 18.6145 32.741 18.6774C32.8351 18.7403 32.9085 18.8298 32.9519 18.9344C32.9952 19.0391 33.0066 19.1542 32.9845 19.2653C32.9624 19.3764 32.9078 19.4785 32.8277 19.5585C32.7476 19.6386 32.6455 19.6932 32.5344 19.7153C32.4233 19.7373 32.3082 19.726 32.2035 19.6826C32.0989 19.6393 32.0095 19.5658 31.9466 19.4716C31.8836 19.3775 31.8501 19.2667 31.8501 19.1534C31.8501 19.0016 31.9105 18.8559 32.0179 18.7486C32.1253 18.6412 32.2709 18.5809 32.4228 18.5809ZM24.5001 14C24.6133 14 24.724 14.0336 24.8182 14.0966C24.9124 14.1595 24.9858 14.249 25.0291 14.3536C25.0724 14.4583 25.0837 14.5734 25.0616 14.6845C25.0395 14.7956 24.9849 14.8976 24.9048 14.9777C24.8247 15.0578 24.7227 15.1123 24.6116 15.1344C24.5005 15.1565 24.3853 15.1451 24.2807 15.1017C24.176 15.0584 24.0866 14.985 24.0237 14.8908C23.9608 14.7966 23.9272 14.6858 23.9273 14.5726C23.9273 14.4974 23.9421 14.4229 23.9709 14.3534C23.9996 14.2839 24.0418 14.2208 24.095 14.1676C24.1482 14.1145 24.2114 14.0723 24.2809 14.0435C24.3504 14.0148 24.4248 14 24.5001 14ZM24.5001 32.3236C24.6133 32.3236 24.724 32.3572 24.8182 32.4201C24.9124 32.4831 24.9857 32.5725 25.0291 32.6772C25.0724 32.7818 25.0837 32.897 25.0616 33.0081C25.0395 33.1191 24.985 33.2212 24.9049 33.3013C24.8248 33.3813 24.7227 33.4359 24.6116 33.458C24.5005 33.4801 24.3854 33.4687 24.2808 33.4254C24.1761 33.382 24.0867 33.3086 24.0238 33.2144C23.9608 33.1203 23.9273 33.0095 23.9273 32.8963C23.9273 32.8211 23.9421 32.7466 23.9709 32.6771C23.9996 32.6076 24.0418 32.5445 24.095 32.4913C24.1482 32.4381 24.2114 32.3959 24.2809 32.3671C24.3504 32.3384 24.4248 32.3236 24.5001 32.3236ZM29.5591 31.9419C29.6535 31.9419 29.7458 31.9698 29.8242 32.0223C29.9027 32.0747 29.9639 32.1492 30 32.2364C30.0361 32.3236 30.0456 32.4196 30.0271 32.5122C30.0087 32.6047 29.9633 32.6898 29.8965 32.7565C29.8298 32.8232 29.7448 32.8687 29.6522 32.8871C29.5596 32.9055 29.4637 32.8961 29.3765 32.8599C29.2893 32.8238 29.2148 32.7627 29.1623 32.6842C29.1099 32.6057 29.0819 32.5134 29.0819 32.4191C29.0819 32.3564 29.0943 32.2943 29.1182 32.2364C29.1422 32.1785 29.1774 32.1259 29.2217 32.0816C29.266 32.0373 29.3186 32.0022 29.3765 31.9782C29.4344 31.9542 29.4964 31.9419 29.5591 31.9419ZM19.4409 31.9419C19.5353 31.9419 19.6275 31.9698 19.706 32.0223C19.7845 32.0747 19.8456 32.1492 19.8818 32.2364C19.9179 32.3236 19.9273 32.4196 19.9089 32.5122C19.8905 32.6047 19.8451 32.6898 19.7783 32.7565C19.7116 32.8232 19.6266 32.8687 19.534 32.8871C19.4414 32.9055 19.3455 32.8961 19.2583 32.8599C19.1711 32.8238 19.0965 32.7627 19.0441 32.6842C18.9917 32.6057 18.9637 32.5134 18.9637 32.4191C18.9637 32.3564 18.976 32.2943 19 32.2364C19.024 32.1785 19.0591 32.1259 19.1035 32.0816C19.1478 32.0373 19.2004 32.0022 19.2583 31.9782C19.3162 31.9542 19.3782 31.9419 19.4409 31.9419ZM19.4409 14.573C19.5353 14.573 19.6275 14.601 19.706 14.6534C19.7845 14.7059 19.8456 14.7804 19.8818 14.8676C19.9179 14.9548 19.9273 15.0508 19.9089 15.1433C19.8905 15.2359 19.8451 15.3209 19.7783 15.3877C19.7116 15.4544 19.6266 15.4998 19.534 15.5183C19.4414 15.5367 19.3455 15.5272 19.2583 15.4911C19.1711 15.455 19.0965 15.3938 19.0441 15.3153C18.9917 15.2369 18.9637 15.1446 18.9637 15.0502C18.9636 14.9875 18.9759 14.9254 18.9999 14.8675C19.0238 14.8095 19.059 14.7569 19.1033 14.7125C19.1476 14.6681 19.2002 14.633 19.2582 14.6089C19.3161 14.5849 19.3782 14.573 19.4409 14.573ZM29.5591 14.573C29.6535 14.573 29.7458 14.601 29.8242 14.6534C29.9027 14.7059 29.9639 14.7804 30 14.8676C30.0361 14.9548 30.0456 15.0508 30.0271 15.1433C30.0087 15.2359 29.9633 15.3209 29.8965 15.3877C29.8298 15.4544 29.7448 15.4998 29.6522 15.5183C29.5596 15.5367 29.4637 15.5272 29.3765 15.4911C29.2893 15.455 29.2148 15.3938 29.1623 15.3153C29.1099 15.2369 29.0819 15.1446 29.0819 15.0502C29.0818 14.9875 29.0941 14.9254 29.1181 14.8675C29.1421 14.8095 29.1772 14.7569 29.2215 14.7125C29.2658 14.6681 29.3185 14.633 29.3764 14.6089C29.4343 14.5849 29.4964 14.573 29.5591 14.573ZM34.5228 23.2574C34.6172 23.2574 34.7095 23.2854 34.7879 23.3379C34.8664 23.3903 34.9276 23.4649 34.9637 23.5521C34.9998 23.6393 35.0092 23.7353 34.9908 23.8278C34.9724 23.9204 34.9269 24.0054 34.8602 24.0722C34.7934 24.1389 34.7083 24.1843 34.6158 24.2027C34.5232 24.2211 34.4272 24.2116 34.34 24.1755C34.2528 24.1393 34.1783 24.0781 34.1259 23.9996C34.0735 23.9211 34.0455 23.8288 34.0456 23.7344C34.0456 23.6718 34.0579 23.6097 34.0819 23.5518C34.1059 23.4939 34.141 23.4413 34.1854 23.397C34.2297 23.3527 34.2823 23.3175 34.3402 23.2935C34.3981 23.2696 34.4601 23.2574 34.5228 23.2574ZM14.4772 23.2574C14.5716 23.2574 14.6639 23.2854 14.7423 23.3379C14.8208 23.3903 14.882 23.4649 14.9181 23.5521C14.9542 23.6393 14.9637 23.7353 14.9452 23.8278C14.9268 23.9204 14.8813 24.0054 14.8146 24.0722C14.7478 24.1389 14.6628 24.1843 14.5702 24.2027C14.4776 24.2211 14.3816 24.2116 14.2944 24.1755C14.2072 24.1393 14.1327 24.0781 14.0803 23.9996C14.0279 23.9211 14 23.8288 14 23.7344C14 23.6718 14.0123 23.6097 14.0363 23.5518C14.0603 23.4939 14.0955 23.4413 14.1398 23.397C14.1841 23.3527 14.2367 23.3175 14.2946 23.2935C14.3525 23.2696 14.4145 23.2574 14.4772 23.2574Z"
        fill="#131316"
      />
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5569 16.4999C22.039 16.4999 22.5105 16.6417 22.9113 16.9073C23.3121 17.1729 23.6247 17.5503 23.8092 17.992C23.9937 18.4336 24.0419 18.9195 23.9477 19.3882C23.8536 19.8569 23.6214 20.2876 23.2804 20.6255C22.9393 20.9634 22.505 21.1936 22.0319 21.2869C21.559 21.3799 21.0689 21.3321 20.6233 21.1492C20.1779 20.9662 19.7971 20.6566 19.5292 20.2591C19.2613 19.8616 19.1183 19.3945 19.1183 18.9165C19.1185 18.2756 19.3753 17.6609 19.8327 17.2077C20.2899 16.7545 20.9101 16.4999 21.5569 16.4999ZM27.4433 16.4999C27.9255 16.5001 28.3968 16.6419 28.7978 16.9075C29.1987 17.1731 29.5111 17.5505 29.6955 17.9922C29.88 18.4336 29.9281 18.9197 29.834 19.3884C29.7399 19.8571 29.5077 20.2876 29.1666 20.6255C28.8257 20.9634 28.3912 21.1936 27.9183 21.2869C27.4452 21.3799 26.9551 21.3321 26.5097 21.1492C26.0641 20.9662 25.6833 20.6566 25.4155 20.2591C25.1477 19.8616 25.0046 19.3945 25.0046 18.9165C25.0048 18.2756 25.2617 17.6609 25.7191 17.2077C26.1765 16.7543 26.7967 16.4999 27.4433 16.4999ZM27.4433 26.6665C27.9255 26.6667 28.3968 26.8085 28.7978 27.0741C29.1987 27.3398 29.5111 27.7171 29.6955 28.1588C29.88 28.6005 29.9281 29.0863 29.834 29.555C29.7399 30.0237 29.5077 30.4544 29.1666 30.7923C28.8257 31.1302 28.3912 31.3602 27.9183 31.4535C27.4452 31.5468 26.9551 31.4987 26.5097 31.3159C26.0641 31.1329 25.6833 30.8232 25.4155 30.4258C25.1477 30.0285 25.0046 29.5611 25.0046 29.0832C25.0046 28.7658 25.0677 28.4515 25.1903 28.1583C25.313 27.8651 25.4925 27.5986 25.7191 27.3742C25.9455 27.1498 26.2144 26.9718 26.5102 26.8504C26.806 26.7291 27.1232 26.6665 27.4433 26.6665ZM21.5569 26.6665C22.039 26.6667 22.5105 26.8085 22.9113 27.074C23.3121 27.3396 23.6247 27.7172 23.8092 28.1586C23.9937 28.6003 24.0419 29.0861 23.9477 29.5549C23.8536 30.0238 23.6214 30.4542 23.2804 30.7922C22.9393 31.1301 22.505 31.3602 22.0319 31.4535C21.559 31.5468 21.0689 31.4987 20.6233 31.3159C20.1779 31.133 19.7971 30.8232 19.5292 30.4258C19.2613 30.0285 19.1183 29.5611 19.1183 29.0832C19.1183 28.7658 19.1814 28.4515 19.304 28.1583C19.4266 27.8651 19.6062 27.5987 19.8326 27.3743C20.0591 27.1499 20.3278 26.972 20.6237 26.8504C20.9197 26.7291 21.2366 26.6665 21.5569 26.6665ZM18.5296 21.6665C19.0119 21.6665 19.4832 21.8083 19.884 22.0739C20.285 22.3396 20.5974 22.717 20.7819 23.1586C20.9663 23.6003 21.0146 24.0861 20.9205 24.5548C20.8263 25.0236 20.5941 25.4542 20.2531 25.7921C19.9122 26.1301 19.4777 26.3602 19.0048 26.4535C18.5317 26.5466 18.0416 26.4987 17.596 26.3159C17.1506 26.1328 16.7698 25.8232 16.5018 25.4257C16.234 25.0283 16.091 24.5611 16.091 24.0831C16.0911 23.4422 16.348 22.8275 16.8054 22.3743C17.2626 21.9211 17.8828 21.6665 18.5296 21.6665ZM30.4706 21.6665C30.9528 21.6667 31.4241 21.8085 31.825 22.0741C32.226 22.3397 32.5384 22.7171 32.7228 23.1588C32.9073 23.6003 32.9554 24.0863 32.8613 24.555C32.7672 25.0237 32.5348 25.4542 32.1939 25.7921C31.8528 26.1301 31.4185 26.3602 30.9454 26.4535C30.4725 26.5466 29.9824 26.4987 29.537 26.3159C29.0914 26.1328 28.7106 25.8232 28.4428 25.4257C28.1748 25.0283 28.0319 24.5611 28.0319 24.0831C28.0319 23.7658 28.095 23.4515 28.2176 23.1583C28.3401 22.865 28.5198 22.5985 28.7462 22.3741C28.9728 22.1497 29.2417 21.9718 29.5375 21.8504C29.8333 21.7289 30.1505 21.6665 30.4706 21.6665ZM33.2456 17.5C33.5449 17.5 33.8376 17.588 34.0864 17.7529C34.3352 17.9179 34.529 18.1521 34.6435 18.4263C34.758 18.7003 34.788 19.0019 34.7295 19.2929C34.671 19.5838 34.5269 19.851 34.3153 20.0607C34.1037 20.2705 33.8339 20.4133 33.5404 20.4711C33.2468 20.5291 32.9426 20.4994 32.6661 20.3857C32.3895 20.2722 32.1532 20.0799 31.9869 19.8334C31.8207 19.5866 31.7319 19.2967 31.7319 19C31.7319 18.803 31.7711 18.6079 31.8472 18.426C31.9233 18.2438 32.0348 18.0784 32.1752 17.9392C32.3158 17.7999 32.4827 17.6895 32.6665 17.6141C32.8501 17.5386 33.0469 17.5 33.2456 17.5ZM33.2456 27.4997C33.5449 27.4999 33.8376 27.5879 34.0864 27.7528C34.3352 27.9176 34.529 28.1518 34.6435 28.426C34.758 28.7 34.788 29.0016 34.7295 29.2925C34.671 29.5835 34.5269 29.8509 34.3153 30.0606C34.1037 30.2703 33.8339 30.4132 33.5404 30.471C33.2468 30.5288 32.9426 30.4991 32.6661 30.3856C32.3895 30.2719 32.1532 30.0798 31.9869 29.833C31.8207 29.5865 31.7319 29.2964 31.7319 28.9997C31.7319 28.8027 31.7711 28.6076 31.8472 28.4256C31.9233 28.2437 32.0348 28.0783 32.1752 27.9389C32.3158 27.7996 32.4827 27.6892 32.6665 27.6138C32.8501 27.5385 33.0469 27.4997 33.2456 27.4997ZM15.7546 27.4997C16.0538 27.4997 16.3464 27.5877 16.5952 27.7526C16.8442 27.9175 17.038 28.1518 17.1525 28.4258C17.267 28.7 17.297 29.0016 17.2387 29.2925C17.1802 29.5835 17.0361 29.8507 16.8245 30.0604C16.6128 30.2702 16.3431 30.413 16.0496 30.471C15.756 30.5288 15.4518 30.4991 15.1751 30.3856C14.8987 30.2721 14.6624 30.0798 14.4961 29.833C14.3298 29.5865 14.241 29.2964 14.241 28.9997C14.2411 28.6019 14.4006 28.2205 14.6844 27.9391C14.9683 27.6578 15.3533 27.4997 15.7546 27.4997ZM15.7546 17.5C16.0538 17.5 16.3464 17.588 16.5952 17.7529C16.8442 17.9178 17.038 18.152 17.1525 18.4261C17.267 18.7001 17.297 19.0017 17.2387 19.2927C17.1802 19.5838 17.0361 19.851 16.8245 20.0607C16.6128 20.2705 16.3431 20.4133 16.0496 20.4711C15.756 20.5291 15.4518 20.4994 15.1751 20.3857C14.8987 20.2722 14.6624 20.0799 14.4961 19.8334C14.3298 19.5866 14.241 19.2967 14.241 19C14.2411 18.6022 14.4006 18.2206 14.6844 17.9394C14.9683 17.6581 15.3533 17.5 15.7546 17.5ZM24.5002 12.5C24.7994 12.5 25.092 12.588 25.3408 12.7529C25.5896 12.9177 25.7836 13.1521 25.8979 13.4261C26.0124 13.7003 26.0424 14.0019 25.9839 14.2928C25.9256 14.5838 25.7813 14.851 25.5697 15.0607C25.3581 15.2704 25.0883 15.4133 24.7948 15.4711C24.5013 15.5289 24.197 15.4992 23.9205 15.3857C23.6441 15.2722 23.4076 15.0799 23.2413 14.8333C23.0752 14.5866 22.9864 14.2967 22.9864 14C22.9864 13.803 23.0255 13.6079 23.1016 13.4258C23.1777 13.2438 23.2892 13.0784 23.4298 12.9392C23.5703 12.7999 23.7373 12.6893 23.9209 12.614C24.1045 12.5386 24.3013 12.4998 24.5002 12.5ZM24.5002 32.4997C24.7994 32.4999 25.092 32.5879 25.3408 32.7528C25.5896 32.9177 25.7836 33.152 25.8979 33.426C26.0124 33.7002 26.0424 34.0018 25.9839 34.2927C25.9256 34.5837 25.7813 34.8509 25.5697 35.0606C25.3581 35.2704 25.0883 35.4132 24.7948 35.471C24.5013 35.5288 24.197 35.4991 23.9205 35.3856C23.6441 35.2721 23.4076 35.0798 23.2413 34.8331C23.0752 34.5865 22.9864 34.2964 22.9864 33.9999C22.9864 33.8029 23.0255 33.6076 23.1016 33.4257C23.1777 33.2437 23.2892 33.0783 23.4298 32.939C23.5703 32.7998 23.7373 32.6892 23.9209 32.614C24.1045 32.5385 24.3013 32.4997 24.5002 32.4997ZM30.9752 33.9999C31.2245 33.9999 31.4684 34.0732 31.6757 34.2107C31.8829 34.3481 32.0445 34.5433 32.14 34.7718C32.2353 35.0002 32.2603 35.2515 32.2115 35.4939C32.1629 35.7363 32.0427 35.959 31.8664 36.1338C31.69 36.3086 31.4652 36.4275 31.2206 36.4757C30.9761 36.5239 30.7225 36.4991 30.4921 36.4046C30.2616 36.31 30.0648 36.1498 29.9262 35.9441C29.7877 35.7386 29.7137 35.497 29.7137 35.2498C29.7137 35.0856 29.7463 34.923 29.8097 34.7714C29.8731 34.6197 29.966 34.4819 30.0832 34.3657C30.2003 34.2498 30.3393 34.1576 30.4924 34.0949C30.6456 34.032 30.8096 33.9997 30.9752 33.9999ZM18.025 33.9999C18.2745 33.9999 18.5184 34.0732 18.7256 34.2107C18.9329 34.3481 19.0945 34.5433 19.19 34.7718C19.2853 35.0002 19.3102 35.2515 19.2615 35.4939C19.2127 35.7363 19.0927 35.959 18.9164 36.1338C18.7398 36.3086 18.5152 36.4275 18.2706 36.4757C18.0259 36.5239 17.7724 36.4991 17.5421 36.4046C17.3116 36.31 17.1146 36.1498 16.9762 35.9441C16.8375 35.7386 16.7637 35.497 16.7637 35.2498C16.7637 35.0856 16.7963 34.923 16.8597 34.7714C16.9231 34.6197 17.016 34.4819 17.1331 34.3657C17.2503 34.2498 17.3893 34.1576 17.5424 34.0949C17.6954 34.032 17.8594 33.9997 18.025 33.9999ZM18.025 11.5C18.2745 11.5 18.5184 11.5734 18.7256 11.7108C18.9329 11.8483 19.0945 12.0435 19.19 12.2719C19.2853 12.5004 19.3102 12.7517 19.2615 12.9941C19.2127 13.2365 19.0927 13.4591 18.9164 13.6339C18.7398 13.8087 18.5152 13.9278 18.2706 13.976C18.0259 14.0242 17.7724 13.9994 17.5421 13.9048C17.3116 13.8101 17.1146 13.65 16.9762 13.4444C16.8375 13.2389 16.7637 12.9972 16.7637 12.7499C16.7637 12.5858 16.7963 12.4232 16.8597 12.2716C16.9231 12.1198 17.016 11.982 17.1331 11.8659C17.2503 11.7499 17.3893 11.6579 17.5424 11.595C17.6954 11.5322 17.8594 11.5 18.025 11.5ZM30.9752 11.5C31.2245 11.5 31.4684 11.5734 31.6757 11.7108C31.8829 11.8483 32.0445 12.0435 32.14 12.2719C32.2353 12.5004 32.2603 12.7517 32.2115 12.9941C32.1629 13.2365 32.0427 13.4591 31.8664 13.6339C31.69 13.8087 31.4652 13.9278 31.2206 13.976C30.9761 14.0242 30.7225 13.9994 30.4921 13.9048C30.2616 13.8101 30.0648 13.65 29.9262 13.4444C29.7877 13.2389 29.7137 12.9972 29.7137 12.7499C29.7137 12.5858 29.7463 12.4232 29.8097 12.2716C29.8731 12.1198 29.966 11.982 30.0832 11.8659C30.2003 11.7499 30.3393 11.6579 30.4924 11.595C30.6456 11.5322 30.8096 11.5 30.9752 11.5ZM37.5343 22.6667C37.7836 22.6667 38.0274 22.74 38.2348 22.8774C38.4422 23.0147 38.6037 23.21 38.6992 23.4384C38.7945 23.6668 38.8196 23.9181 38.7709 24.1605C38.7221 24.4031 38.6022 24.6257 38.4256 24.8005C38.2492 24.9754 38.0246 25.0943 37.78 25.1425C37.5353 25.1909 37.2818 25.1661 37.0513 25.0714C36.821 24.9767 36.6241 24.8166 36.4854 24.6111C36.3469 24.4055 36.2729 24.1638 36.2729 23.9165C36.2729 23.5851 36.4059 23.2671 36.6424 23.0327C36.879 22.7983 37.1997 22.6667 37.5343 22.6667ZM11.4658 22.6667C11.7153 22.6667 11.9591 22.74 12.1663 22.8774C12.3737 23.0147 12.5354 23.21 12.6308 23.4384C12.7263 23.6668 12.7511 23.9181 12.7025 24.1605C12.6538 24.4031 12.5337 24.6257 12.3573 24.8005C12.1809 24.9754 11.9561 25.0943 11.7116 25.1425C11.467 25.1909 11.2135 25.1661 10.983 25.0714C10.7526 24.9767 10.5556 24.8166 10.4171 24.6111C10.2784 24.4055 10.2046 24.1638 10.2046 23.9165C10.2046 23.7524 10.2372 23.59 10.3005 23.4382C10.3639 23.2866 10.4569 23.1488 10.5739 23.0327C10.6911 22.9166 10.8301 22.8245 10.9832 22.7617C11.1361 22.699 11.3002 22.6667 11.4658 22.6667ZM10.5408 14.9999C10.7404 14.9999 10.9355 15.0586 11.1014 15.1685C11.2674 15.2783 11.3967 15.4346 11.473 15.6173C11.5495 15.8001 11.5694 16.0011 11.5305 16.1951C11.4915 16.3892 11.3953 16.5675 11.2542 16.7072C11.1131 16.8471 10.9333 16.9424 10.7376 16.981C10.5418 17.0194 10.3389 16.9997 10.1546 16.9239C9.9701 16.8483 9.81259 16.7199 9.70177 16.5554C9.59094 16.3911 9.53174 16.1976 9.53174 15.9997C9.53192 15.7346 9.63816 15.4802 9.82739 15.2928C10.0166 15.1052 10.2732 14.9999 10.5408 14.9999ZM10.5408 30.9998C10.7404 30.9998 10.9355 31.0585 11.1014 31.1683C11.2674 31.2783 11.3967 31.4345 11.473 31.6173C11.5495 31.8 11.5694 32.0012 11.5305 32.1952C11.4915 32.3892 11.3953 32.5673 11.2542 32.7072C11.1131 32.8471 10.9333 32.9423 10.7376 32.9809C10.5418 33.0195 10.3389 32.9996 10.1546 32.9239C9.9701 32.8481 9.81259 32.72 9.70177 32.5555C9.59094 32.3909 9.53174 32.1976 9.53174 31.9998C9.53192 31.7345 9.63816 31.4802 9.82739 31.2927C10.0166 31.1051 10.2732 30.9998 10.5408 30.9998ZM38.4593 30.9998C38.6589 30.9998 38.8539 31.0585 39.0199 31.1683C39.1857 31.2783 39.315 31.4345 39.3915 31.6173C39.4678 31.8 39.4879 32.0012 39.4489 32.1952C39.41 32.3892 39.3138 32.5673 39.1727 32.7072C39.0315 32.8471 38.8516 32.9423 38.6559 32.9809C38.4601 33.0195 38.2573 32.9996 38.0729 32.9239C37.8886 32.8481 37.7311 32.72 37.6202 32.5555C37.5092 32.3909 37.4502 32.1976 37.4502 31.9998C37.4502 31.7345 37.5566 31.4802 37.7459 31.2927C37.9351 31.1051 38.1916 30.9998 38.4593 30.9998ZM38.4593 14.9999C38.6589 14.9999 38.8539 15.0586 39.0199 15.1685C39.1857 15.2783 39.315 15.4346 39.3915 15.6173C39.4678 15.8001 39.4879 16.0011 39.4489 16.1951C39.41 16.3892 39.3138 16.5675 39.1727 16.7072C39.0315 16.8471 38.8516 16.9424 38.6559 16.981C38.4601 17.0194 38.2573 16.9997 38.0729 16.9239C37.8886 16.8483 37.7311 16.7199 37.6202 16.5554C37.5092 16.3911 37.4502 16.1976 37.4502 15.9997C37.4502 15.7346 37.5566 15.4802 37.7459 15.2928C37.9351 15.1052 38.1916 14.9999 38.4593 14.9999ZM24.5002 7C24.6996 7 24.8947 7.05868 25.0607 7.1687C25.2266 7.27854 25.356 7.43484 25.4322 7.61751C25.5085 7.80036 25.5284 8.00137 25.4895 8.19539C25.4506 8.38941 25.3544 8.56754 25.2132 8.70742C25.0721 8.84731 24.8924 8.94248 24.6967 8.98108C24.5009 9.01967 24.2979 8.99976 24.1136 8.92397C23.9292 8.84835 23.7717 8.72017 23.6608 8.55566C23.55 8.39116 23.4908 8.19766 23.491 7.99997C23.491 7.86864 23.5171 7.73854 23.5678 7.61717C23.6184 7.49579 23.6927 7.3856 23.7864 7.29269C23.8802 7.19996 23.9915 7.12626 24.114 7.07597C24.2364 7.02585 24.3675 7 24.5002 7ZM24.5002 38.9997C24.6996 38.9997 24.8947 39.0584 25.0607 39.1683C25.2266 39.2783 25.3558 39.4344 25.4322 39.6172C25.5085 39.7999 25.5284 40.0011 25.4895 40.1951C25.4506 40.389 25.3545 40.5673 25.2134 40.7071C25.0723 40.8469 24.8924 40.9422 24.6967 40.9808C24.5009 41.0194 24.2981 40.9995 24.1138 40.9239C23.9293 40.8481 23.7718 40.7199 23.661 40.5554C23.55 40.3911 23.491 40.1976 23.491 39.9999C23.491 39.8685 23.5171 39.7384 23.5678 39.6171C23.6184 39.4957 23.6927 39.3855 23.7864 39.2926C23.8802 39.1997 23.9915 39.126 24.114 39.0757C24.2364 39.0256 24.3675 38.9997 24.5002 38.9997ZM33.4137 38.3331C33.58 38.3331 33.7426 38.3819 33.8808 38.4735C34.0191 38.5651 34.1269 38.6952 34.1905 38.8474C34.2541 38.9997 34.2709 39.1674 34.2383 39.3291C34.2058 39.4906 34.1258 39.6392 34.0082 39.7557C33.8906 39.8722 33.7409 39.9517 33.5777 39.9838C33.4146 40.0159 33.2456 39.9995 33.092 39.9363C32.9383 39.8733 32.8071 39.7666 32.7146 39.6295C32.6222 39.4924 32.5729 39.3312 32.5729 39.1665C32.5729 39.057 32.5948 38.9486 32.6369 38.8474C32.6791 38.7463 32.7412 38.6545 32.8192 38.5771C32.8973 38.4997 32.9899 38.4384 33.092 38.3965C33.194 38.3546 33.3032 38.3331 33.4137 38.3331ZM15.5864 38.3331C15.7527 38.3331 15.9151 38.3819 16.0534 38.4735C16.1917 38.5651 16.2994 38.6952 16.3632 38.8474C16.4268 38.9997 16.4434 39.1674 16.4109 39.3291C16.3785 39.4906 16.2985 39.6392 16.1808 39.7557C16.0633 39.8722 15.9135 39.9517 15.7504 39.9838C15.5872 40.0159 15.4183 39.9995 15.2646 39.9363C15.111 39.8733 14.9796 39.7666 14.8872 39.6295C14.7949 39.4924 14.7456 39.3312 14.7456 39.1665C14.7456 39.057 14.7672 38.9486 14.8095 38.8474C14.8518 38.7463 14.9137 38.6545 14.9919 38.5771C15.0699 38.4997 15.1626 38.4384 15.2646 38.3965C15.3667 38.3546 15.4759 38.3331 15.5864 38.3331ZM15.5864 8.00067C15.7527 8.00067 15.9151 8.04957 16.0534 8.14108C16.1917 8.23276 16.2994 8.36287 16.3632 8.51515C16.4268 8.66743 16.4434 8.83508 16.4109 8.99662C16.3785 9.15833 16.2985 9.30678 16.1808 9.42343C16.0633 9.53992 15.9135 9.6192 15.7504 9.65151C15.5872 9.68364 15.4183 9.66705 15.2646 9.60401C15.111 9.54096 14.9796 9.43409 14.8872 9.297C14.7949 9.16008 14.7456 8.99889 14.7456 8.83404C14.7454 8.72454 14.7671 8.61609 14.8094 8.51497C14.8515 8.41368 14.9135 8.32182 14.9915 8.24429C15.0696 8.16675 15.1623 8.10545 15.2645 8.06336C15.3665 8.02145 15.4759 8.00067 15.5864 8.00067ZM33.4137 8.00067C33.58 8.00067 33.7426 8.04957 33.8808 8.14108C34.0191 8.23276 34.1269 8.36287 34.1905 8.51515C34.2541 8.66743 34.2709 8.83508 34.2383 8.99662C34.2058 9.15833 34.1258 9.30678 34.0082 9.42343C33.8906 9.53992 33.7409 9.6192 33.5777 9.65151C33.4146 9.68364 33.2456 9.66705 33.092 9.60401C32.9383 9.54096 32.8071 9.43409 32.7146 9.297C32.6222 9.16008 32.5729 8.99889 32.5729 8.83404C32.5727 8.72454 32.5944 8.61609 32.6367 8.51497C32.679 8.41368 32.7408 8.32182 32.8189 8.24429C32.8969 8.16675 32.9898 8.10545 33.0918 8.06336C33.1938 8.02145 33.3032 8.00067 33.4137 8.00067ZM42.1593 23.1668C42.3256 23.1668 42.4882 23.2157 42.6263 23.3074C42.7647 23.3989 42.8725 23.5292 42.9361 23.6815C42.9997 23.8338 43.0163 24.0014 42.9838 24.1629C42.9514 24.3247 42.8712 24.4731 42.7537 24.5898C42.636 24.7062 42.4861 24.7855 42.3231 24.8177C42.16 24.8498 41.9908 24.8332 41.8372 24.7702C41.6835 24.7069 41.5523 24.6001 41.46 24.463C41.3676 24.3259 41.3183 24.1647 41.3185 23.9998C41.3185 23.8905 41.3402 23.7821 41.3824 23.6809C41.4247 23.5798 41.4866 23.488 41.5648 23.4106C41.6428 23.3332 41.7355 23.2718 41.8375 23.2299C41.9396 23.1881 42.0488 23.1668 42.1593 23.1668ZM6.84078 23.1668C7.00711 23.1668 7.16973 23.2157 7.30786 23.3074C7.44617 23.3989 7.554 23.5292 7.61761 23.6815C7.68121 23.8338 7.69795 24.0014 7.66535 24.1629C7.63294 24.3247 7.55277 24.4731 7.43525 24.5898C7.31755 24.7062 7.16779 24.7855 7.00464 24.8177C6.84149 24.8498 6.67234 24.8332 6.51871 24.7702C6.36507 24.7069 6.23381 24.6001 6.14148 24.463C6.04916 24.3259 6 24.1647 6 23.9998C6 23.8905 6.02167 23.7821 6.06396 23.6809C6.10624 23.5798 6.16826 23.488 6.24631 23.4106C6.32437 23.3332 6.41704 23.2718 6.51906 23.2299C6.62107 23.1881 6.73031 23.1668 6.84078 23.1668Z"
        fill="currentColor"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#F8D12F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.088 35.8028L43.0014 32.8907L45.9159 35.8052L47.6102 34.1098L43.0014 29.5L38.3926 34.1086L40.088 35.8028ZM35.5 37.0002L37.1948 35.3055L38.8896 37.0002L37.1948 38.695L35.5 37.0002ZM43.0013 41.1104L40.0879 38.1971L38.3902 39.8901L38.3925 39.8925L43.0013 44.4999L47.6101 39.8901L47.6113 39.8889L45.9159 38.1959L43.0013 41.1104ZM47.1104 37.0007L48.8052 35.3059L50.5 37.0007L48.8052 38.6954L47.1104 37.0007ZM43.0014 35.2791L44.7205 36.9994H44.7217L44.7205 37.0006L43.0014 38.7208L41.2823 37.0029L41.2799 36.9994L41.2823 36.997L41.5832 36.6961L41.7301 36.5504L43.0014 35.2791Z"
        fill="#131316"
      />
    </svg>
  );

export default WormholeADABSC;

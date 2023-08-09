import React from "react";

const AppStore = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 87 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80.0719 9.75e-05H6.93205C6.66545 9.75e-05 6.40204 9.75e-05 6.13614 0.0015975C5.91356 0.0030975 5.69275 0.007455 5.46803 0.0111225C4.97984 0.0170489 4.49279 0.0613547 4.01113 0.143655C3.53014 0.227747 3.06422 0.386284 2.62912 0.613905C2.19456 0.843451 1.79748 1.14172 1.4523 1.4979C1.10531 1.85308 0.81607 2.26361 0.595696 2.71372C0.374714 3.16293 0.221484 3.6443 0.141299 4.14121C0.0603519 4.63749 0.0167933 5.13949 0.0110146 5.64271C0.0042677 5.87266 0.0035552 6.10337 0 6.33335V23.669C0.0035552 23.9019 0.0042677 24.1275 0.0110146 24.3605C0.0167951 24.8637 0.0603537 25.3656 0.141299 25.8619C0.221263 26.3591 0.374502 26.8407 0.595696 27.2901C0.81597 27.7388 1.10525 28.1476 1.4523 28.5008C1.79617 28.8586 2.1935 29.1571 2.62912 29.3849C3.06421 29.6131 3.53008 29.7726 4.01113 29.858C4.49287 29.9396 4.97987 29.9839 5.46803 29.9906C5.69275 29.9957 5.91356 29.9986 6.13614 29.9986C6.40203 30.0001 6.66546 30.0001 6.93205 30.0001H80.0719C80.3332 30.0001 80.5987 30.0001 80.86 29.9986C81.0815 29.9986 81.3087 29.9957 81.5302 29.9906C82.0175 29.9843 82.5035 29.94 82.9843 29.858C83.4669 29.772 83.9344 29.6125 84.3716 29.3849C84.8068 29.1569 85.2038 28.8585 85.5474 28.5008C85.8935 28.1463 86.1834 27.7377 86.4064 27.2901C86.626 26.8404 86.7778 26.3588 86.8566 25.8619C86.9376 25.3656 86.9827 24.8637 86.9915 24.3605C86.9943 24.1275 86.9943 23.9019 86.9943 23.669C87 23.3966 87 23.1256 87 22.8487V7.15219C87 6.87754 87 6.60508 86.9943 6.33335C86.9943 6.10337 86.9943 5.87266 86.9915 5.64268C86.9827 5.13941 86.9376 4.63752 86.8566 4.14118C86.7775 3.64456 86.6258 3.16322 86.4064 2.71369C85.9577 1.81149 85.246 1.07712 84.3716 0.613837C83.9344 0.386773 83.4668 0.228278 82.9843 0.143587C82.5036 0.0609246 82.0175 0.0166033 81.5302 0.0110175C81.3087 0.0073575 81.0815 0.0029625 80.86 0.0015C80.5987 0 80.3332 0 80.0719 0V9.75e-05Z"
        fill="#A6A6A6"
      />
      <path
        d="M6.13975 29.3438C5.91823 29.3438 5.70207 29.3408 5.4823 29.3357C5.02701 29.3296 4.57279 29.2887 4.12336 29.2134C3.70429 29.1389 3.29833 29.0005 2.91886 28.8025C2.54286 28.6061 2.19993 28.3487 1.90319 28.04C1.60215 27.735 1.35153 27.3812 1.16124 26.9927C0.96886 26.6016 0.83572 26.1824 0.766461 25.7498C0.691667 25.2848 0.6512 24.8147 0.645409 24.3435C0.6408 24.1853 0.634766 23.6587 0.634766 23.6587V6.33326C0.634766 6.33326 0.641193 5.8147 0.645446 5.66235C0.65099 5.19186 0.691222 4.72249 0.765792 4.2583C0.835179 3.82444 0.968422 3.40406 1.16091 3.01172C1.35049 2.62346 1.59973 2.2694 1.89895 1.96326C2.19784 1.65422 2.54187 1.39545 2.9185 1.19641C3.2971 0.99907 3.7023 0.861549 4.12052 0.788453C4.57143 0.712377 5.02722 0.671247 5.48408 0.665408L6.1401 0.65625H80.8565L81.5203 0.665775C81.973 0.671324 82.4247 0.712088 82.8714 0.787718C83.2939 0.861731 83.7033 1.00021 84.0863 1.19861C84.8408 1.59974 85.4547 2.23437 85.842 3.01355C86.0315 3.40318 86.1626 3.82013 86.2312 4.25024C86.3066 4.71824 86.3488 5.1913 86.3575 5.66565C86.3596 5.87805 86.3596 6.1062 86.3596 6.33326C86.3654 6.61451 86.3654 6.8822 86.3654 7.1521V22.8486C86.3654 23.1211 86.3654 23.387 86.3596 23.655C86.3596 23.8989 86.3596 24.1223 86.3568 24.3523C86.3483 24.8182 86.3068 25.2828 86.2325 25.7424C86.1647 26.1782 86.0323 26.6006 85.8399 26.9949C85.6483 27.3792 85.3991 27.7299 85.1016 28.0342C84.8046 28.3445 84.461 28.6035 84.0841 28.8011C83.7023 29.0005 83.2935 29.1396 82.8714 29.2134C82.4221 29.2891 81.9678 29.33 81.5125 29.3357C81.2995 29.3408 81.0765 29.3438 80.86 29.3438L80.0719 29.3453L6.13975 29.3438Z"
        fill="black"
      />
      <path
        d="M18.0082 15.2223C18.016 14.5963 18.1772 13.9825 18.4767 13.4381C18.7763 12.8936 19.2045 12.4362 19.7215 12.1083C19.393 11.6244 18.9598 11.2262 18.4561 10.9453C17.9523 10.6644 17.3921 10.5085 16.8198 10.49C15.5989 10.3578 14.4153 11.2436 13.7932 11.2436C13.159 11.2436 12.2011 10.5031 11.1697 10.525C10.5025 10.5473 9.85227 10.7474 9.28237 11.106C8.71246 11.4645 8.2423 11.9692 7.9177 12.5709C6.51162 15.0822 7.56043 18.773 8.90734 20.803C9.58123 21.797 10.3688 22.9073 11.3994 22.868C12.4078 22.8248 12.7844 22.2046 14.0017 22.2046C15.2077 22.2046 15.561 22.868 16.6125 22.8429C17.6946 22.8248 18.3764 21.8445 19.0266 20.8411C19.5108 20.1328 19.8834 19.35 20.1306 18.5217C19.5019 18.2474 18.9654 17.7883 18.588 17.2015C18.2106 16.6148 18.0089 15.9265 18.0082 15.2223Z"
        fill="white"
      />
      <path
        d="M16.0225 9.15703C16.6125 8.42637 16.9032 7.48724 16.8328 6.53906C15.9314 6.63673 15.0987 7.08115 14.5007 7.78377C14.2084 8.12702 13.9844 8.52635 13.8418 8.95892C13.6991 9.3915 13.6405 9.84885 13.6692 10.3048C14.1201 10.3096 14.5661 10.2088 14.9737 10.01C15.3814 9.81116 15.7399 9.51952 16.0225 9.15703Z"
        fill="white"
      />
      <path
        d="M30.7557 20.3508H27.3143L26.4879 22.8682H25.0303L28.2899 13.5547H29.8043L33.0639 22.8682H31.5814L30.7557 20.3508ZM27.6707 19.1892H30.3986L29.0538 15.1038H29.0162L27.6707 19.1892Z"
        fill="white"
      />
      <path
        d="M40.1037 19.4756C40.1037 21.5857 39.0089 22.9414 37.3568 22.9414C36.9382 22.964 36.522 22.8646 36.1557 22.6545C35.7895 22.4444 35.4879 22.1321 35.2857 21.7534H35.2544V25.1167H33.9033V16.0801H35.2112V17.2095H35.236C35.4475 16.8327 35.7541 16.522 36.1232 16.3106C36.4923 16.0992 36.91 15.995 37.3319 16.0091C39.0025 16.0091 40.1037 17.3714 40.1037 19.4756ZM38.715 19.4756C38.715 18.1009 38.0263 17.1971 36.9755 17.1971C35.9432 17.1971 35.2488 18.1199 35.2488 19.4756C35.2488 20.8438 35.9432 21.7601 36.9755 21.7601C38.0263 21.7601 38.715 20.8628 38.715 19.4756Z"
        fill="white"
      />
      <path
        d="M47.3479 19.4756C47.3479 21.5857 46.2531 22.9414 44.6009 22.9414C44.1824 22.964 43.7662 22.8646 43.3999 22.6545C43.0336 22.4444 42.7321 22.1321 42.5298 21.7534H42.4986V25.1167H41.1475V16.0801H42.4553V17.2095H42.4801C42.6917 16.8327 42.9983 16.522 43.3673 16.3106C43.7364 16.0992 44.1541 15.995 44.576 16.0091C46.2467 16.0091 47.3479 17.3714 47.3479 19.4756ZM45.9591 19.4756C45.9591 18.1009 45.2704 17.197 44.2196 17.197C43.1873 17.197 42.4929 18.1199 42.4929 19.4756C42.4929 20.8438 43.1873 21.76 44.2196 21.76C45.2704 21.76 45.9591 20.8628 45.9591 19.4756H45.9591Z"
        fill="white"
      />
      <path
        d="M52.136 20.2723C52.2361 21.1958 53.1059 21.8023 54.2944 21.8023C55.4333 21.8023 56.2526 21.1958 56.2526 20.363C56.2526 19.6401 55.7584 19.2073 54.5884 18.9107L53.4183 18.6199C51.7604 18.2068 50.9908 17.407 50.9908 16.1091C50.9908 14.5022 52.3483 13.3984 54.276 13.3984C56.1837 13.3984 57.4915 14.5022 57.5356 16.1091H56.1716C56.09 15.1797 55.3452 14.6187 54.2568 14.6187C53.1683 14.6187 52.4236 15.1863 52.4236 16.0125C52.4236 16.6709 52.8993 17.0584 54.0629 17.355L55.0576 17.6069C56.91 18.0588 57.6797 18.8264 57.6797 20.1887C57.6797 21.9311 56.3342 23.0224 54.1943 23.0224C52.1921 23.0224 50.8403 21.9568 50.7529 20.2722L52.136 20.2723Z"
        fill="white"
      />
      <path
        d="M60.5961 14.4688V16.0757H61.8478V17.1794H60.5961V20.9229C60.5961 21.5044 60.8467 21.7754 61.3969 21.7754C61.5455 21.7727 61.6939 21.762 61.8414 21.7431V22.8403C61.594 22.888 61.3426 22.9096 61.0909 22.9048C59.7583 22.9048 59.2386 22.3884 59.2386 21.0715V17.1794H58.2815V16.0757H59.2385V14.4688H60.5961Z"
        fill="white"
      />
      <path
        d="M62.5723 19.4712C62.5723 17.3347 63.792 15.9922 65.6941 15.9922C67.6026 15.9922 68.8167 17.3347 68.8167 19.4712C68.8167 21.6135 67.609 22.9502 65.6941 22.9502C63.7799 22.9502 62.5723 21.6135 62.5723 19.4712ZM67.44 19.4712C67.44 18.0056 66.7889 17.1406 65.6941 17.1406C64.5993 17.1406 63.9489 18.0122 63.9489 19.4712C63.9489 20.9426 64.5993 21.801 65.6941 21.801C66.7889 21.801 67.44 20.9426 67.44 19.4712H67.44Z"
        fill="white"
      />
      <path
        d="M69.9307 16.08H71.2193V17.2358H71.2506C71.3378 16.8748 71.5428 16.5558 71.8311 16.3324C72.1194 16.109 72.4735 15.9948 72.8339 16.009C72.9896 16.0084 73.1449 16.0259 73.2968 16.061V17.3647C73.1002 17.3027 72.8952 17.2743 72.6897 17.2805C72.4934 17.2723 72.2977 17.308 72.1161 17.3851C71.9345 17.4623 71.7711 17.5791 71.6374 17.7275C71.5036 17.8759 71.4026 18.0525 71.3412 18.245C71.2798 18.4375 71.2596 18.6414 71.2818 18.8427V22.8703H69.9307L69.9307 16.08Z"
        fill="white"
      />
      <path
        d="M79.5266 20.8716C79.3448 22.1042 78.1811 22.9502 76.6923 22.9502C74.7774 22.9502 73.5889 21.6267 73.5889 19.5034C73.5889 17.3735 74.7838 15.9922 76.6355 15.9922C78.4566 15.9922 79.6018 17.2827 79.6018 19.3416V19.8191H74.9528V19.9033C74.9313 20.1532 74.9616 20.405 75.0417 20.6418C75.1218 20.8787 75.2499 21.0953 75.4174 21.2772C75.5849 21.4591 75.7879 21.6022 76.0131 21.6969C76.2383 21.7917 76.4805 21.8359 76.7235 21.8267C77.0428 21.8575 77.3632 21.7812 77.6371 21.6092C77.911 21.4371 78.1237 21.1784 78.2436 20.8716L79.5266 20.8716ZM74.9592 18.845H78.25C78.2621 18.6203 78.2291 18.3954 78.153 18.1845C78.0769 17.9736 77.9593 17.7812 77.8077 17.6194C77.6561 17.4575 77.4737 17.3298 77.272 17.2441C77.0703 17.1585 76.8536 17.1167 76.6355 17.1216C76.4154 17.1202 76.1973 17.1638 75.9937 17.2499C75.7901 17.3359 75.6051 17.4628 75.4492 17.623C75.2934 17.7832 75.1698 17.9737 75.0857 18.1834C75.0016 18.3932 74.9586 18.618 74.9592 18.845V18.845Z"
        fill="white"
      />
      <path
        d="M27.0346 11.0219V7.17929H25.6699V6.54688H29.0701V7.17932H27.7084V11.022L27.0346 11.0219Z"
        fill="white"
      />
      <path
        d="M29.2783 10.0733C29.2783 9.4654 29.7171 9.11494 30.496 9.06513L31.3827 9.0124V8.7209C31.3827 8.3642 31.1541 8.16279 30.7125 8.16279C30.3518 8.16279 30.1019 8.29939 30.0302 8.53816H29.4047C29.4707 7.95808 29.9997 7.58601 30.7423 7.58601C31.5631 7.58601 32.026 8.00751 32.026 8.7209V11.0284H31.404V10.5538H31.3529C31.2491 10.724 31.1034 10.8628 30.9307 10.956C30.7579 11.0491 30.5643 11.0933 30.3695 11.084C30.2321 11.0988 30.0932 11.0836 29.9618 11.0396C29.8304 10.9956 29.7094 10.9236 29.6066 10.8284C29.5037 10.7332 29.4214 10.6168 29.3649 10.4867C29.3084 10.3567 29.2789 10.2158 29.2783 10.0733ZM31.3827 9.78473V9.50239L30.5833 9.55512C30.1324 9.58625 29.928 9.74445 29.928 10.0422C29.928 10.3461 30.1836 10.523 30.535 10.523C30.638 10.5338 30.742 10.523 30.8409 10.4915C30.9398 10.4599 31.0315 10.4081 31.1106 10.3393C31.1897 10.2704 31.2546 10.1858 31.3013 10.0905C31.3481 9.99526 31.3757 9.89127 31.3827 9.78473ZM30.2766 6.01642C30.4139 5.96792 30.5582 5.9439 30.7033 5.94538C31.1335 5.94538 31.4126 6.18088 31.4126 6.55329C31.4002 6.71947 31.3385 6.87769 31.2359 7.00639C31.1332 7.13509 30.9946 7.22803 30.8389 7.27254L30.5918 6.94404C30.7878 6.87886 30.9255 6.74555 30.9255 6.61189C30.9255 6.47566 30.7963 6.37639 30.6131 6.37639C30.4977 6.37312 30.383 6.39534 30.2766 6.44157L30.2766 6.01642Z"
        fill="white"
      />
      <path
        d="M32.9529 6.65277C32.9479 6.56644 32.9682 6.48056 33.011 6.40625C33.0539 6.33194 33.1174 6.27263 33.1934 6.23599C33.2693 6.19935 33.3542 6.18707 33.4369 6.20075C33.5197 6.21443 33.5966 6.25343 33.6576 6.31271C33.7187 6.37199 33.761 6.44881 33.7793 6.53321C33.7975 6.61762 33.7907 6.70573 33.7599 6.78613C33.729 6.86653 33.6754 6.93551 33.6061 6.98415C33.5368 7.03278 33.4549 7.05882 33.3711 7.05889C33.3175 7.06171 33.2639 7.05332 33.2136 7.03423C33.1632 7.01515 33.1171 6.98575 33.078 6.94781C33.039 6.90988 33.0078 6.86418 32.9862 6.81348C32.9647 6.76278 32.9534 6.70811 32.9529 6.65277ZM33.0487 7.65142H33.6927V11.0286H33.0487V7.65142Z"
        fill="white"
      />
      <path
        d="M38.1041 11.0256H37.4097L36.2283 7.64844H36.9191L37.7342 10.3123H37.7853L38.5968 7.64844H39.2827L38.1041 11.0256Z"
        fill="white"
      />
      <path
        d="M42.6724 10.1132C42.5846 10.4218 42.3944 10.6888 42.1351 10.8674C41.8757 11.046 41.5638 11.1249 41.2538 11.0902C41.0381 11.0961 40.8238 11.0535 40.6256 10.9653C40.4275 10.8772 40.2504 10.7456 40.1065 10.5798C39.9626 10.4139 39.8554 10.2177 39.7924 10.0049C39.7294 9.79199 39.712 9.56753 39.7415 9.34704C39.7128 9.12588 39.7305 8.90093 39.7933 8.68743C39.8562 8.47392 39.9628 8.27685 40.106 8.10954C40.2491 7.94224 40.4254 7.80861 40.6229 7.7177C40.8205 7.6268 41.0347 7.58073 41.251 7.58264C42.1619 7.58264 42.7114 8.22464 42.7114 9.28514V9.51771H40.3997V9.55506C40.3895 9.679 40.4046 9.80374 40.444 9.92131C40.4833 10.0389 40.5461 10.1467 40.6282 10.2377C40.7103 10.3288 40.8099 10.4012 40.9207 10.4503C41.0315 10.4993 41.151 10.5239 41.2715 10.5226C41.4261 10.5417 41.5827 10.513 41.7214 10.4401C41.86 10.3672 41.9746 10.2534 42.0504 10.1131L42.6724 10.1132ZM42.4445 7.18567H41.7707L41.2744 6.55286H41.2268L40.7305 7.18567H40.0574L40.8988 6.15921H41.6024L42.4445 7.18567ZM40.3997 9.02478H42.0532C42.0614 8.91144 42.0465 8.79759 42.0094 8.69055C41.9724 8.58351 41.914 8.48565 41.8381 8.40326C41.7622 8.32086 41.6705 8.25576 41.5687 8.21213C41.467 8.1685 41.3575 8.1473 41.2474 8.14991C41.1357 8.14846 41.0248 8.1701 40.9212 8.21356C40.8177 8.25701 40.7237 8.32141 40.6447 8.40294C40.5657 8.48448 40.5033 8.58151 40.4612 8.6883C40.4191 8.7951 40.3982 8.90951 40.3997 9.02478ZM42.0504 6.07532L41.3801 5.10156H42.0532L42.6276 6.07532H42.0504Z"
        fill="white"
      />
      <path
        d="M46.229 6.80469V7.66089H46.9383V8.22229H46.229V9.95887C46.229 10.3126 46.3703 10.4675 46.6919 10.4675C46.7743 10.4673 46.8565 10.4621 46.9383 10.4521V11.0073C46.8223 11.0288 46.7047 11.0402 46.5869 11.0414C45.8684 11.0414 45.5822 10.7806 45.5822 10.1295V8.22226H45.0625V7.66086H45.5822V6.80469H46.229Z"
        fill="white"
      />
      <path
        d="M47.792 7.65185H48.4139V8.16968H48.4622C48.5319 7.98992 48.6549 7.83755 48.8137 7.73445C48.9725 7.63134 49.1589 7.58281 49.3462 7.59582C49.4429 7.59448 49.5396 7.60381 49.6344 7.62365V8.2814C49.5159 8.25527 49.395 8.24177 49.2738 8.24112C49.1672 8.23125 49.0598 8.24448 48.9585 8.27997C48.8572 8.31546 48.7642 8.37242 48.6855 8.44719C48.6068 8.52197 48.5441 8.61289 48.5015 8.71414C48.4589 8.81538 48.4373 8.9247 48.4381 9.03506V11.0291H47.792L47.792 7.65185Z"
        fill="white"
      />
      <path
        d="M53.0317 10.1099C52.9439 10.4185 52.7538 10.6855 52.4944 10.8641C52.2351 11.0427 51.9232 11.1216 51.6132 11.0869C51.3975 11.0928 51.1831 11.0502 50.985 10.962C50.7869 10.8739 50.6098 10.7423 50.4659 10.5765C50.322 10.4106 50.2148 10.2144 50.1518 10.0016C50.0887 9.7887 50.0714 9.56423 50.1009 9.34374C50.0722 9.12258 50.0898 8.89763 50.1527 8.68413C50.2156 8.47062 50.3222 8.27355 50.4653 8.10624C50.6085 7.93894 50.7848 7.80531 50.9823 7.7144C51.1799 7.6235 51.394 7.57743 51.6103 7.57934C52.5212 7.57934 53.0708 8.22134 53.0708 9.28184V9.51441H50.759V9.55176C50.7489 9.6757 50.764 9.80045 50.8034 9.91801C50.8427 10.0356 50.9055 10.1434 50.9875 10.2344C51.0696 10.3255 51.1693 10.3979 51.2801 10.447C51.3909 10.496 51.5104 10.5206 51.6309 10.5193C51.7855 10.5384 51.942 10.5097 52.0807 10.4368C52.2194 10.3639 52.334 10.2501 52.4098 10.1098L53.0317 10.1099ZM52.8003 7.18237H52.1364L51.6337 6.50305H51.5862L51.0842 7.18237H50.4168L51.2581 6.10938H51.9617L52.8003 7.18237ZM50.759 9.02148H52.4126C52.4208 8.90814 52.4058 8.79429 52.3688 8.68725C52.3317 8.58021 52.2734 8.48235 52.1975 8.39996C52.1216 8.31756 52.0298 8.25246 51.9281 8.20883C51.8264 8.1652 51.7169 8.144 51.6068 8.14661C51.495 8.14516 51.3841 8.1668 51.2806 8.21026C51.1771 8.25371 51.0831 8.31811 51.0041 8.39964C50.9251 8.48118 50.8627 8.57821 50.8206 8.685C50.7785 8.7918 50.7576 8.90621 50.759 9.02148Z"
        fill="white"
      />
      <path
        d="M53.9385 7.64664H54.5604V8.18314H54.6087C54.6906 7.99045 54.8288 7.82892 55.0039 7.72106C55.179 7.61321 55.3824 7.5644 55.5857 7.58145C55.745 7.56909 55.9049 7.59387 56.0536 7.65394C56.2024 7.71402 56.3361 7.80784 56.445 7.92848C56.5538 8.04911 56.6349 8.19345 56.6823 8.35082C56.7297 8.50819 56.7422 8.67454 56.7188 8.83755V11.0238H56.0727V9.00492C56.0727 8.4622 55.8441 8.19229 55.3663 8.19229C55.2581 8.1871 55.1502 8.20609 55.0498 8.24796C54.9494 8.28983 54.859 8.3536 54.7848 8.43489C54.7105 8.51618 54.6542 8.61306 54.6196 8.71891C54.5851 8.82476 54.5731 8.93707 54.5846 9.04813V11.0238H53.9385V7.64664Z"
        fill="white"
      />
    </svg>
  );
};

export default AppStore;
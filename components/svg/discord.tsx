import { FC } from 'react';

import { SVGProps } from './svg.types';

const Discord: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 24 18"
    fill="none"
    {...props}
  >
    <path
      d="M23.1844 12.9188L19.9969 2.30632C19.9356 2.09168 19.8261 1.89391 19.6766 1.72816C19.5271 1.56241 19.3416 1.43308 19.1344 1.35007H19.0782L19.1344 1.33132C18.0885 0.912255 17.0057 0.592106 15.9 0.375074C15.8034 0.355972 15.7039 0.356097 15.6073 0.375443C15.5107 0.394789 15.4189 0.432976 15.337 0.487824C15.2552 0.542671 15.185 0.613104 15.1304 0.6951C15.0758 0.777095 15.0378 0.869046 15.0188 0.965699C14.9983 1.06178 14.9971 1.16099 15.0153 1.25754C15.0335 1.35408 15.0707 1.44604 15.1248 1.52806C15.1789 1.61007 15.2488 1.68051 15.3304 1.73525C15.412 1.79 15.5036 1.82797 15.6 1.84695C16.0219 1.93132 16.4344 2.03445 16.8375 2.14695C16.986 2.22402 17.1045 2.34852 17.174 2.50066C17.2436 2.65279 17.2604 2.82382 17.2216 2.98655C17.1828 3.14928 17.0907 3.29437 16.9599 3.39874C16.8292 3.50312 16.6673 3.56078 16.5 3.56257H16.425C14.9803 3.1858 13.4931 2.99674 12 3.00007C10.5421 2.99573 9.08959 3.17847 7.67816 3.54382C7.49855 3.59121 7.30775 3.57027 7.1427 3.48504C6.97766 3.39982 6.85011 3.25638 6.78476 3.0825C6.71941 2.90863 6.72091 2.71668 6.78897 2.54385C6.85703 2.37102 6.9868 2.22959 7.15316 2.14695H7.16253C7.56566 2.03445 7.97816 1.93132 8.40003 1.84695C8.49668 1.82788 8.58863 1.78996 8.67063 1.73535C8.75263 1.68075 8.82306 1.61052 8.87791 1.52868C8.93275 1.44684 8.97094 1.355 8.99029 1.25841C9.00963 1.16181 9.00976 1.06235 8.99066 0.965699C8.94991 0.77171 8.83493 0.601342 8.67027 0.490984C8.50561 0.380627 8.30432 0.339028 8.10941 0.375074C6.9998 0.59696 5.91371 0.923417 4.86566 1.35007C4.65845 1.43308 4.47299 1.56241 4.32349 1.72816C4.17399 1.89391 4.06442 2.09168 4.00316 2.30632L0.815656 12.9188C0.732965 13.1963 0.732338 13.4918 0.813851 13.7696C0.895365 14.0474 1.05553 14.2957 1.27503 14.4844C1.36127 14.5675 1.45204 14.6458 1.54691 14.7188H1.55628C3.07503 15.9563 5.07191 16.9032 7.32191 17.447C7.37949 17.4654 7.43957 17.4749 7.50003 17.4751C7.68546 17.478 7.86541 17.4121 8.00512 17.2902C8.14483 17.1682 8.23441 16.9988 8.25655 16.8147C8.27869 16.6306 8.23183 16.4448 8.12501 16.2932C8.01819 16.1416 7.859 16.0349 7.67816 15.9938C6.66664 15.7495 5.68324 15.4007 4.74378 14.9532C4.6152 14.8327 4.53314 14.6708 4.51201 14.4959C4.49087 14.3209 4.53201 14.1441 4.6282 13.9965C4.72439 13.8489 4.86949 13.7398 5.03805 13.6885C5.20661 13.6371 5.38787 13.6468 5.55003 13.7157C7.33128 14.5032 9.57191 15.0001 12 15.0001C14.4282 15.0001 16.6688 14.5032 18.45 13.7157C18.6122 13.6468 18.7934 13.6371 18.962 13.6885C19.1306 13.7398 19.2757 13.8489 19.3719 13.9965C19.4681 14.1441 19.5092 14.3209 19.4881 14.4959C19.4669 14.6708 19.3849 14.8327 19.2563 14.9532C18.3168 15.4007 17.3334 15.7495 16.3219 15.9938C16.1411 16.0349 15.9819 16.1416 15.875 16.2932C15.7682 16.4448 15.7214 16.6306 15.7435 16.8147C15.7657 16.9988 15.8552 17.1682 15.9949 17.2902C16.1347 17.4121 16.3146 17.478 16.5 17.4751C16.5605 17.4749 16.6206 17.4654 16.6782 17.447C18.9282 16.9032 20.925 15.9563 22.4438 14.7188H22.4532C22.548 14.6458 22.6388 14.5675 22.725 14.4844C22.9445 14.2957 23.1047 14.0474 23.1862 13.7696C23.2677 13.4918 23.2671 13.1963 23.1844 12.9188ZM9.00003 11.6251C8.77753 11.6251 8.56002 11.5591 8.37501 11.4355C8.19001 11.3119 8.04581 11.1362 7.96067 10.9306C7.87552 10.725 7.85324 10.4988 7.89665 10.2806C7.94006 10.0624 8.0472 9.86191 8.20454 9.70458C8.36187 9.54725 8.56233 9.4401 8.78055 9.39669C8.99878 9.35328 9.22498 9.37556 9.43055 9.46071C9.63612 9.54586 9.81182 9.69005 9.93543 9.87506C10.0591 10.0601 10.125 10.2776 10.125 10.5001C10.125 10.7984 10.0065 11.0846 9.79553 11.2956C9.58455 11.5065 9.2984 11.6251 9.00003 11.6251ZM15 11.6251C14.7775 11.6251 14.56 11.5591 14.375 11.4355C14.19 11.3119 14.0458 11.1362 13.9607 10.9306C13.8755 10.725 13.8532 10.4988 13.8966 10.2806C13.9401 10.0624 14.0472 9.86191 14.2045 9.70458C14.3619 9.54725 14.5623 9.4401 14.7806 9.39669C14.9988 9.35328 15.225 9.37556 15.4305 9.46071C15.6361 9.54586 15.8118 9.69005 15.9354 9.87506C16.059 10.0601 16.125 10.2776 16.125 10.5001C16.125 10.7984 16.0065 11.0846 15.7955 11.2956C15.5845 11.5065 15.2984 11.6251 15 11.6251Z"
      fill={props.fill || 'currentColor'}
    />
    <path
      d="M23.1844 12.9188L19.9969 2.30632C19.9356 2.09168 19.8261 1.89391 19.6766 1.72816C19.5271 1.56241 19.3416 1.43308 19.1344 1.35007H19.0782L19.1344 1.33132C18.0885 0.912255 17.0057 0.592106 15.9 0.375074C15.8034 0.355972 15.7039 0.356097 15.6073 0.375443C15.5107 0.394789 15.4189 0.432976 15.337 0.487824C15.2552 0.542671 15.185 0.613104 15.1304 0.6951C15.0758 0.777095 15.0378 0.869046 15.0188 0.965699C14.9983 1.06178 14.9971 1.16099 15.0153 1.25754C15.0335 1.35408 15.0707 1.44604 15.1248 1.52806C15.1789 1.61007 15.2488 1.68051 15.3304 1.73525C15.412 1.79 15.5036 1.82797 15.6 1.84695C16.0219 1.93132 16.4344 2.03445 16.8375 2.14695C16.986 2.22402 17.1045 2.34852 17.174 2.50066C17.2436 2.65279 17.2604 2.82382 17.2216 2.98655C17.1828 3.14928 17.0907 3.29437 16.9599 3.39874C16.8292 3.50312 16.6673 3.56078 16.5 3.56257H16.425C14.9803 3.1858 13.4931 2.99674 12 3.00007C10.5421 2.99573 9.08959 3.17847 7.67816 3.54382C7.49855 3.59121 7.30775 3.57027 7.1427 3.48504C6.97766 3.39982 6.85011 3.25638 6.78476 3.0825C6.71941 2.90863 6.72091 2.71668 6.78897 2.54385C6.85703 2.37102 6.9868 2.22959 7.15316 2.14695H7.16253C7.56566 2.03445 7.97816 1.93132 8.40003 1.84695C8.49668 1.82788 8.58863 1.78996 8.67063 1.73535C8.75263 1.68075 8.82306 1.61052 8.87791 1.52868C8.93275 1.44684 8.97094 1.355 8.99029 1.25841C9.00963 1.16181 9.00976 1.06235 8.99066 0.965699C8.94991 0.77171 8.83493 0.601342 8.67027 0.490984C8.50561 0.380627 8.30432 0.339028 8.10941 0.375074C6.9998 0.59696 5.91371 0.923417 4.86566 1.35007C4.65845 1.43308 4.47299 1.56241 4.32349 1.72816C4.17399 1.89391 4.06442 2.09168 4.00316 2.30632L0.815656 12.9188C0.732965 13.1963 0.732338 13.4918 0.813851 13.7696C0.895365 14.0474 1.05553 14.2957 1.27503 14.4844C1.36127 14.5675 1.45204 14.6458 1.54691 14.7188H1.55628C3.07503 15.9563 5.07191 16.9032 7.32191 17.447C7.37949 17.4654 7.43957 17.4749 7.50003 17.4751C7.68546 17.478 7.86541 17.4121 8.00512 17.2902C8.14483 17.1682 8.23441 16.9988 8.25655 16.8147C8.27869 16.6306 8.23183 16.4448 8.12501 16.2932C8.01819 16.1416 7.859 16.0349 7.67816 15.9938C6.66664 15.7495 5.68324 15.4007 4.74378 14.9532C4.6152 14.8327 4.53314 14.6708 4.51201 14.4959C4.49087 14.3209 4.53201 14.1441 4.6282 13.9965C4.72439 13.8489 4.86949 13.7398 5.03805 13.6885C5.20661 13.6371 5.38787 13.6468 5.55003 13.7157C7.33128 14.5032 9.57191 15.0001 12 15.0001C14.4282 15.0001 16.6688 14.5032 18.45 13.7157C18.6122 13.6468 18.7934 13.6371 18.962 13.6885C19.1306 13.7398 19.2757 13.8489 19.3719 13.9965C19.4681 14.1441 19.5092 14.3209 19.4881 14.4959C19.4669 14.6708 19.3849 14.8327 19.2563 14.9532C18.3168 15.4007 17.3334 15.7495 16.3219 15.9938C16.1411 16.0349 15.9819 16.1416 15.875 16.2932C15.7682 16.4448 15.7214 16.6306 15.7435 16.8147C15.7657 16.9988 15.8552 17.1682 15.9949 17.2902C16.1347 17.4121 16.3146 17.478 16.5 17.4751C16.5605 17.4749 16.6206 17.4654 16.6782 17.447C18.9282 16.9032 20.925 15.9563 22.4438 14.7188H22.4532C22.548 14.6458 22.6388 14.5675 22.725 14.4844C22.9445 14.2957 23.1047 14.0474 23.1862 13.7696C23.2677 13.4918 23.2671 13.1963 23.1844 12.9188ZM9.00003 11.6251C8.77753 11.6251 8.56002 11.5591 8.37501 11.4355C8.19001 11.3119 8.04581 11.1362 7.96067 10.9306C7.87552 10.725 7.85324 10.4988 7.89665 10.2806C7.94006 10.0624 8.0472 9.86191 8.20454 9.70458C8.36187 9.54725 8.56233 9.4401 8.78055 9.39669C8.99878 9.35328 9.22498 9.37556 9.43055 9.46071C9.63612 9.54586 9.81182 9.69005 9.93543 9.87506C10.0591 10.0601 10.125 10.2776 10.125 10.5001C10.125 10.7984 10.0065 11.0846 9.79553 11.2956C9.58455 11.5065 9.2984 11.6251 9.00003 11.6251ZM15 11.6251C14.7775 11.6251 14.56 11.5591 14.375 11.4355C14.19 11.3119 14.0458 11.1362 13.9607 10.9306C13.8755 10.725 13.8532 10.4988 13.8966 10.2806C13.9401 10.0624 14.0472 9.86191 14.2045 9.70458C14.3619 9.54725 14.5623 9.4401 14.7806 9.39669C14.9988 9.35328 15.225 9.37556 15.4305 9.46071C15.6361 9.54586 15.8118 9.69005 15.9354 9.87506C16.059 10.0601 16.125 10.2776 16.125 10.5001C16.125 10.7984 16.0065 11.0846 15.7955 11.2956C15.5845 11.5065 15.2984 11.6251 15 11.6251Z"
      fill={props.fill || 'currentColor'}
      fillOpacity="0.2"
    />
  </svg>
);

export default Discord;

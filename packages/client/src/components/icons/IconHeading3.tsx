import { Icon } from '@douyinfe/semi-ui';

export const IconHeading3: React.FC<{ style?: React.CSSProperties }> = ({ style = {} }) => {
  return (
    <Icon
      style={style}
      svg={
        <svg width="18" height="18" viewBox="0 0 1024 1024" role="presentation">
          <path d="M219.546 220.16v243.302h278.528V220.16h75.366V793.6h-75.366V535.552H219.546V793.6H143.36V220.16h76.186z m546.457 215.45c69.018 0 117.504 37.273 117.504 90.521 0 34.663-24.422 66.714-55.859 74.752l-6.4 1.229v4.25c41.472 3.993 72.704 39.475 72.704 82.739 0 59.75-52.94 101.53-128.205 101.53-67.481 0-119.245-38.042-119.245-79.258 0-15.77 11.264-27.239 26.522-27.239 10.957 0 19.251 5.223 28.467 18.74 14.49 22.988 36.762 35.225 64.768 35.225 37.479 0 61.747-20.224 61.747-51.2 0-28.979-21.555-49.152-54.272-51.763l-7.219-0.256H741.99c-15.001 0-26.01-11.264-26.01-26.778 0-13.312 8.5-23.705 21.095-25.856l4.915-0.41h23.245c30.72 0 53.248-19.967 53.248-47.462s-22.016-46.284-53.76-46.284c-22.016 0-39.629 9.113-52.582 26.93l-4.608 7.066c-7.527 12.544-16.282 17.767-28.058 17.767a26.368 26.368 0 0 1-27.494-27.495c0-39.987 48.793-76.748 114.022-76.748z"></path>
        </svg>
      }
    />
  );
};

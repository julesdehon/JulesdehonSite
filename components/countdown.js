import Countdown from 'react-countdown';

export default function Timer({ date }) {

  const renderer = ({ days, hours, minutes, seconds }) => {
    return <span>{days} days, {hours}h {minutes}m {seconds}s</span>
  };

  return (
    <Countdown
      date={date}
      renderer={renderer}
    />
  )
}

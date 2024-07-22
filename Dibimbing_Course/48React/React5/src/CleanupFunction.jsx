import { useEffect, useState } from 'react';

export default function TimerComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    // alert('useEfect baru dijalankan')
    const interval = setInterval(() => {
      setCount(prev => {
        const newCount = prev + 1;
        if(newCount%5 === 0){
            console.log(input);
            setTrigger(prev => prev + 1);
        }
        return newCount;
      })
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
        clearInterval(interval)
        // alert('cleanup dijalankan')
    };
  }, [trigger]);

  const text = (e) => {
    setInput(e.target.value)
  }

  return(
    <div>
        <input type="text" onChange={text}/>
        Count: {count};
        {count%5};
    </div>
  )
}
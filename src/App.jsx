import { useEffect, useState } from "react";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(16 * 60 * 60); // 16 годин у секундах

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="bg-gray-200 w-xs m-auto md:w-md xl:w-xl">
      <ul className="flex gap-4 align-middle justify-around py-4 text-sm md:text-xl">
        <li>
          <h3>
            Новинка
            <br /> 2025 року
          </h3>
        </li>
        <li>
          <h3>
            Оплата <br /> після перевірки
          </h3>
        </li>
        <li>
          <h3>
            Швидка <br /> доставка
          </h3>
        </li>
      </ul>
      <h2 className="bold text-4xl bg-rose-200 text-center text-white py-4 md:py-8">
        Мереживна накидка
      </h2>
      <div className="w-full">
        <img className="w-full" src="/250395447.webp" alt="мереживна накидка" />
      </div>
      <ul className="flex align-middle flex-col text-left">
        <li className="py-4 px-8  border-b border-gray-400">
          Якісний гіпоалергенний матеріал
        </li>
        <li className="py-4 px-8 border-b border-gray-400">
          Вирівнювання, приховування недоліків
        </li>
        <li className="py-4 px-8 ">Акція -50 на другу покупку</li>
      </ul>
      <div className="bg-gray-300 p-4">
        <div className="flex align-middle justify-around">
          <div className="text-white p-4 bg-pink-400 text-4xl md:text-6xl rounded-sm flex flex-col justify-center">
            {hours} <span className="text-sm text-center">годин</span>
          </div>
          <div className="text-white p-4 bg-pink-400 text-4xl md:text-6xl rounded-sm flex flex-col justify-center">
            {minutes}
            <span className="text-sm text-center">хвилин</span>
          </div>
          <div className="text-white p-4 bg-pink-400 text-4xl md:text-6xl rounded-sm flex flex-col justify-center">
            {secs}
            <span className="text-sm text-center">секунд</span>
          </div>
        </div>
        <ul className="flex align-middle justify-around py-8">
          <li className="">
            <p>Звичайна ціна:</p>
            <p>
              <span className="line-through text-4xl">275</span>грн
            </p>
          </li>
          <li>
            <p>Ціна за акцією:</p>
            <p className="text-4xl text-orange-300">249 грн</p>
          </li>
        </ul>
        <a
          href="/"
          className="text-white drop-shadow-md bg-linear-to-b from-yellow-400 to-yellow-500 rounded-sm  block w-11/12 h-auto py-4 text-2xl md:text-4xl m-auto text-center"
        >
          Замовити зараз
        </a>
      </div>
    </div>
  );
};

export default App;

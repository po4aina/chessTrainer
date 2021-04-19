import descriptionStyle from "../description/description.module.css"

export default function Description() {
  return (
    <div className={descriptionStyle.wrapper}>
      <div className={descriptionStyle.paragraphWrapper}>
        <p>
          It’s funny if you don’t understand how to play this game from its title.
        </p>
        <p>
          But if you really don’t, here it is:
        </p>
        <ul className={descriptionStyle.list}>
          <li>
            Click “Start”.
          </li>
          <li>
            Find the quarter where randomly generated coordinate is.
          </li>
        </ul>
      </div>
    </div>
  );
}
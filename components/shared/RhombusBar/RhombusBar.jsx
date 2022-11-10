import Link from "next/link";

export default function RhombusBar({ items }) {
  return (
    <div className="rhombus-bar">
      <div className="rhombus-bar__container">
        {items.map((item, i) => (
          <Link href={item.href} key={i}>
            <a
              className="rhombus-bar__rombus"
              style={{
                "--bg": `url(${item.img})`,
                // "--bg": `red`,
              }}
            >
              {item?.icon ? (
                <img
                  className="rhombus-bar__icon"
                  alt={item.title}
                  src={item.icon}
                  height="25px"
                  width="25px"
                />
              ) : null}
              <h2>
                <span>{item.title}</span>
              </h2>
              <span className="rhombus-bar__click">
                <img
                  src="/images/icons/plus-black.svg"
                  height="25px"
                  width="25px"
                  alt="View Link Icon"
                  className="rhombus-bar__click__icon"
                />
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

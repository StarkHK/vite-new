import { useState } from "react";

const Accordian = ({ accordianData }) => {
  const [open, setOpen] = useState(new Set());

  const handleClick = (accordianValue) => {
    const newOpenSection = new Set(open);

    newOpenSection.has(accordianValue)
      ? newOpenSection.delete(accordianValue)
      : newOpenSection.add(accordianValue);

    setOpen(newOpenSection);
  };

  return (
    <>
      <div className="accordion">
        {accordianData.map(({ value, title, contents }) => {
          const isExpanded = open.has(value);

          return (
            <div className="accordion-item">
              <button
                className="accordion-item-title"
                type="button"
                onClick={() => handleClick(value)}
              >
                {title}
                <span
                  aria-hidden={true}
                  className={`accordion-icon ${isExpanded && "accordion-icon--rotated"}`}
                />
              </button>
              <div className="accordion-item-contents" hidden={!isExpanded}>
                {contents}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordian;

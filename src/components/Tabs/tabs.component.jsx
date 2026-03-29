import { useId, useState, useRef } from "react";

export default function Tabs({ items, defaultItem, value, onChange }) {
  const tabId = useId();

  // Controlled vs Uncontrolled
  const isControlled = value !== undefined;
  const [internalTab, setInternalTab] = useState(defaultItem ?? items[0].value);

  const activeTab = isControlled ? value : internalTab;

  const tabRefs = useRef([]);

  function changeTab(newValue, index) {
    if (!isControlled) {
      setInternalTab(newValue);
    }
    onChange?.(newValue);

    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(e, index) {
    let newIndex = index;

    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % items.length;
    }

    if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + items.length) % items.length;
    }

    if (e.key === "Home") {
      newIndex = 0;
    }

    if (e.key === "End") {
      newIndex = items.length - 1;
    }

    if (newIndex !== index) {
      e.preventDefault();
      const newValue = items[newIndex].value;
      changeTab(newValue, newIndex);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Tabs List */}
      <div role="tablist" aria-label="Tabs" className="flex border-b gap-4">
        {items.map(({ value: tabValue, label }, index) => {
          const isActive = activeTab === tabValue;

          return (
            <button
              key={`${tabValue}-tab-${tabId}`}
              ref={(el) => (tabRefs.current[index] = el)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tabValue}-panel-${tabId}`}
              id={`${tabValue}-tab-${tabId}`}
              tabIndex={isActive ? 0 : -1}
              className={`px-4 py-2 font-medium transition-colors focus:outline-none ${
                isActive
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => changeTab(tabValue, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="p-4 border">
        {items.map(({ value: tabValue, content }) => {
          const isActive = activeTab === tabValue;

          return (
            <div
              key={`${tabValue}-panel-${tabId}`}
              role="tabpanel"
              id={`${tabValue}-panel-${tabId}`}
              aria-labelledby={`${tabValue}-tab-${tabId}`}
              hidden={!isActive}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

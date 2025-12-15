import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

/**
 * Accordion - Main compound component
 */
const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggleItem }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

/**
 * Accordion.Item - Individual accordion item
 */
Accordion.Item = ({ index, title, children }) => {
  const { openIndex, toggleItem } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div style={{ borderBottom: '1px solid #ddd' }}>
      <button
        onClick={() => toggleItem(index)}
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: isOpen ? '#f8f9fa' : 'white',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div style={{ padding: '15px', backgroundColor: '#f8f9fa' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;

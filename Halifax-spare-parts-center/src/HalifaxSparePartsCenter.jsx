
const HallifaxSparePartsCenter = ({ isOpen, additionalStock }) => {
    return (
      <div>
        {isOpen ? <p>The center is open.</p> : <p>The center is closed.</p>}
        <p>{additionalStock ? 'Additional stock has been bought.' : 'No additional stock has been bought.'}</p>
      </div>
    );
  };
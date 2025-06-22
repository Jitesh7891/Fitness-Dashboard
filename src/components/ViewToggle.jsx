// Button to toogle view between Daily, Weekly and Monthly

const ViewToggle = ({ viewType, onChange }) => {
  const types = ['daily', 'weekly', 'monthly'];
  return (
    <div className="btn-group" role="group">
      {types.map(type => (
        <button
          key={type}
          type="button"
          className={`btn ${viewType === type ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => onChange(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;

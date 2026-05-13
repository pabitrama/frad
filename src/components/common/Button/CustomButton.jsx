import './button.css'


const CustomButton = ({
  type = "button",
  text = "Button",
  variant = "primary",
  icon = "",
  loading = false,
  disabled = false,
  onClick,
  className = "",
  fullWidth = false
}) => {

  return (

    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        custom-btn
        btn-${variant}
        ${fullWidth ? "w-100" : ""}
        ${loading ? "btn-loading" : ""}
        ${className}
      `}
    >

      {/* ICON */}
      {icon && !loading && (
        <i className={`${icon} btn-icon`}></i>
      )}

      {/* LOADING */}
      {loading ? (
        <>
          <span className="btn-spinner"></span>
          Processing...
        </>
      ) : (
        text
      )}

    </button>
  );
};

export default CustomButton;
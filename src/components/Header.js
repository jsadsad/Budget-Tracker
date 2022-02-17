const Header = ({ textColor }) => {
  return (
    <>
      <h1
        className="me-auto"
        style={{
          fontStyle: 'oblique',
          cursor: 'default',
          color: `${textColor}`,
        }}
      >
        Budget Tracker
      </h1>
    </>
  )
}

export default Header

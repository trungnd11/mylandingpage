import "./scrollTop.scss";

export default function ScrollTop() {

  const onTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div className="onTop" onClick={onTop}>
      <i className="fa-solid fa-arrow-turn-up"></i>
    </div>
  );
}

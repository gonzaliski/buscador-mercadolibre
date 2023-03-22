import Carousel from "nuka-carousel";
import css from "./slider.css";

type ImgUrlArray = {
  pictures: string[];
};
function MySlider(props: ImgUrlArray) {
  console.log(props);
  return (
    <Carousel
      className={css["carousel"]}
      wrapAround={true}
      adaptiveHeight={true}
      defaultControlsConfig={{
        pagingDotsStyle: {
          display: props.pictures.length > 10 ? "none" : "initial",
          margin:
            props.pictures.length > 10 ? "5px 5px 0px 5px" : "5px 8px 0px 8px",
        },
      }}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <button
          className={css["slide-button"]}
          onClick={previousSlide}
          disabled={previousDisabled}
        >
          {"<"}
        </button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <button
          className={css["slide-button"]}
          onClick={nextSlide}
          disabled={nextDisabled}
        >
          {">"}
        </button>
      )}
    >
      {props.pictures.map((r: any) => (
        <img
          className={css["slider__img"]}
          key={r.id}
          src={r.secure_url}
          alt="item image"
        />
      ))}
    </Carousel>
  );
}

export { MySlider };

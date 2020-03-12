import React from 'react';
import { getRandomNumber, getNextRoundRobin } from './../../libs/utils/math';
import PropTypes from 'prop-types';
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from '../../config/constants'
import Img from './style'

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: -1,
    }
  }

  componentDidMount() {
    const { banners, duration, random } = this.props
    this.id = setInterval(() => {
      let { counter } = this.state;

      if (random && banners.length)
        counter = getRandomNumber(banners.length);
      else if (banners.length)
        counter = getNextRoundRobin(counter, banners.length)

      this.setState({ counter });
    }, duration)
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
  render() {
    const { banners, altText, height, defaultBanner } = this.props;
    const { counter } = this.state;
    let imagePath
    if (counter === -1) {
      if (defaultBanner)
        imagePath = `${PUBLIC_IMAGE_FOLDER}banners/${defaultBanner}`;
      else {
        imagePath = PUBLIC_IMAGE_FOLDER + DEFAULT_BANNER_IMAGE;
      }
    }
    else
      imagePath = PUBLIC_IMAGE_FOLDER + banners[counter];
    return (
      <Img src={imagePath} alt={altText} height={height} />
    )
  }
}
Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string),
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool
};

Slider.defaultProps = {
  altText: 'Default Banner',
  banners: [],
  defaultBanner: 'default.png',
  duration: 1000,
  height: 200,
  random: false
};
export default Slider;

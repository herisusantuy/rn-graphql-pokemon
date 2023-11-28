import sizes from './sizes';

const { screenHeight, screenWidth } = sizes;

const metrics = {
  screenWidth: screenWidth < screenHeight ? screenWidth : screenHeight,
  screenHeight: screenWidth < screenHeight ? screenHeight : screenWidth
};

export default metrics;

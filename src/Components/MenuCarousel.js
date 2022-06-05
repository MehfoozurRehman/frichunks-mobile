import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Width} from '../Constants/Constants';
import MenuCarouselItem from './MenuCarouselItem';

export class MenuCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      entries: [
        {
          title: 'Menu 1',
          text: 'Text 1',
        },
        {
          title: 'Menu 2',
          text: 'Text 2',
        },
        {
          title: 'Menu 3',
          text: 'Text 3',
        },
        {
          title: 'Menu 4',
          text: 'Text 4',
        },
        {
          title: 'Menu 5',
          text: 'Text 5',
        },
      ],
    };
  }

  _renderItem = ({item, index}) => {
    return <MenuCarouselItem item={item} index={index} button={true} />;
  };

  render() {
    return (
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={3000}
        itemWidth={Width - 80}
      />
    );
  }
}

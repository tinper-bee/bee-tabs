import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getDataAttr } from './utils';

export default class TabBarRootNode extends React.Component {

  getExtraContentStyle = () => {
    const { tabBarPosition, direction } = this.props;
    const topOrBottom = (tabBarPosition === 'top' || tabBarPosition === 'bottom');
    if (direction === 'rtl') {
      return topOrBottom ? { float: 'left' } : {};
    }
    return topOrBottom ? { float: 'right' } : {};
  }

  render() {
    const {
      clsPrefix, onKeyDown, className, extraContent, style, tabBarPosition, children, direction,
      ...restProps
    } = this.props;
    const cls = classnames(`${clsPrefix}-bar`, {
      // [className]: !!className,
    });
    const topOrBottom = (tabBarPosition === 'top' || tabBarPosition === 'bottom');
    const extraContentStyle = (extraContent && extraContent.props) ? extraContent.props.style : {};
    let newChildren = children;
    if (extraContent) {
      newChildren = [
        cloneElement(extraContent, {
          key: 'extra',
          style: {
            ...this.getExtraContentStyle(topOrBottom, direction),
            ...extraContentStyle,
          },
        }),
        cloneElement(children, { key: 'content' }),
      ];
      newChildren = topOrBottom ? newChildren : newChildren.reverse();
    }
    return (
      <div
        role="tablist"
        className={cls}
        tabIndex="0"
        ref={this.props.saveRef('root')}
        onKeyDown={onKeyDown}
        // style={style}
        {...getDataAttr(restProps)}
      >
        {newChildren}
      </div>
    );
  }
}

TabBarRootNode.propTypes = {
  clsPrefix: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  tabBarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  children: PropTypes.node,
  extraContent: PropTypes.node,
  onKeyDown: PropTypes.func,
  saveRef: PropTypes.func,
  direction: PropTypes.oneOf(['ltr', 'rtl']),
};

TabBarRootNode.defaultProps = {
  clsPrefix: '',
  className: '',
  style: {},
  tabBarPosition: 'top',
  extraContent: null,
  children: null,
  onKeyDown: () => { },
  saveRef: () => { },
};

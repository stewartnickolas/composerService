import React from 'react'
import {observer, inject} from 'mobx-react'

@inject('i18nStore')
@observer
export default class Label extends React.Component{
  translateChildren = (children) => {
    return this.translateString(this.coerceChildrenToString(children))
  }

  /**
   * Must first coerce the children to a string.
   *
   * This primarily handles the case where 'children'
   * is an array of strings. By default they would be
   * concatenated with a comma delimiter, which is undesired.
   * This happens when using variable interpolation, e.g.
   *
   *    <Label>show this {componentType}, otherwise</Label>
   *
   * for componentType = 'field' results in the translated
   * output as
   *
   *    "show this ,field,, otherwise"
   *
   * if the string coercion is not performed.
   */
  coerceChildrenToString = (children) => {
    if (typeof(children) === "string") {
      return children
    } else if (typeof(children.join) === "function") {
      return children.join('')
    } else {
      return children.toString()
    }
  }

  translateString = (string) => {
    let translation = this.props.i18nStore.i18n[string];
    return !translation ? string : translation;
  }

  render(){
    if (!this.props.children) {
      return null
    }

    return(
        <span dangerouslySetInnerHTML={{
          __html: this.translateChildren(this.props.children)
        }}/>
    );
  }
}

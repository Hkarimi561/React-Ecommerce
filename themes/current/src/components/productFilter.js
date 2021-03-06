import React from 'react'
import { NavLink } from 'react-router-dom'
import text from '../lib/text'
import config from '../lib/config'

import CategoryTree from './categoryTree'
import Sort from './sort'
import PriceSlider from './priceSlider'
import AttributeFilter from './attributeFilter'

export default class ProductFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarIsActive: false
    }
  }

  sidebarToggle = () => this.setState({
    sidebarIsActive: !this.state.sidebarIsActive
  });

  sidebarClose = () => this.setState({sidebarIsActive: false});

  render() {
    const { sidebarIsActive } = this.state;
    const { categoryDetails, categories, settings, productFilter, productsMinPrice, productsMaxPrice, productsAttributes} = this.props.state;

    return (
      <div className="column is-one-quarter">
        <div className="is-hidden-tablet">
          <button className="button is-fullwidth" onClick={this.sidebarToggle}>{text.filterProducts}</button>
        </div>

        <div className={sidebarIsActive ? 'modal is-active' : 'is-hidden-mobile'} style={{ zIndex: 101 }}>
          <div className={sidebarIsActive ? 'modal-background' : ''} onClick={this.sidebarClose}></div>
          <div className={sidebarIsActive ? 'modal-content' : ''}>
            <div className={sidebarIsActive ? 'box sidebar' : ''}>

              <div className="is-hidden-tablet" style={{ marginBottom: 30 }}>
                <Sort defaultSort={settings.default_product_sorting} currentSort={productFilter.sort} setSort={this.props.setSort} />
              </div>

              <CategoryTree
                categories={categories}
                activeCategory={categoryDetails}
                onClick={this.sidebarClose}
              />

              <PriceSlider
                minPrice={productsMinPrice}
                maxPrice={productsMaxPrice}
                minValue={productFilter.priceFrom}
                maxValue={productFilter.priceTo}
                setPriceFromAndTo={this.props.setPriceFromAndTo}
                settings={settings}
              />

              <AttributeFilter
                attributes={productsAttributes}
                setFilterAttribute={this.props.setFilterAttribute}
                unsetFilterAttribute={this.props.unsetFilterAttribute}
              />

            </div>
          </div>
        </div>

      </div>
    )
  }
}

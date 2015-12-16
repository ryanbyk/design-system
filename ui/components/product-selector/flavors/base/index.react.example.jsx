/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'ui/components/modals/index.react';
import MediaObject from 'ui/components/media-objects/index.react';
import Img from 'app_modules/ui/img';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import Lorem from 'react-lorem-component';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

const imageEmpty = (
  <span className={pf('avatar avatar--small avatar--empty')}></span>
);
const image1 = (
  <span className={pf('avatar avatar--small icon-custom-10 align--center-center')}>AC</span>
);
const image2 = (
  <span className={pf('avatar avatar--small icon-custom-20 align--center-center')}>BP</span>
);
const image3 = (
  <span className={pf('avatar avatar--small icon-custom-30 align--center-center')}>MS</span>
);
const image4 = (
  <span className={pf('avatar avatar--small icon-custom-40 align--center-center')}>MS</span>
);

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: true };
  }

  render() {
    return (
     <div className="demo-only" style={{height: '720px'}}>
        <Modal isOpen={this.state.showing} renderInline={true} flavor="large" >
          <Modal.Header>
            <h2 className={pf('text-heading--medium')}>Add Products</h2>
            <p className={pf('m-top--x-small')}>Pricebook: Salesforce Products <a href="#void">(Change)</a></p>
          </Modal.Header>

          <Modal.Body className={pf('grid nowrap')}>
            <div className={pf('col grid grid--vertical nowrap size--8-of-12')}>
              <div className={pf('p-vertical--x-small p-horizontal--large grid shrink-none')}>
                <div className={pf('grow input-has-icon input-has-icon--left m-right--small')}>
                  <SvgIcon className={pf('input__icon icon-text-default')} sprite="utility" symbol="search" />
                  <input id="search-text-input-product" className={pf('input')} type="text" placeholder="Search Products" />
                </div>
                <ButtonIcon
                  flavor="icon-border-filled"
                  sprite="utility"
                  symbol="filterList"
                  assistiveText="Filter Products" />
              </div>
              {/* Product List */}
              <div className={pf('grow')}>
                <table className={pf('table table--bordered no-row-hover')}>
                  <thead>
                    <tr className={pf('text-heading--label')} >
                      <th className={pf('is-sortable')} scope="col">
                        <span className={pf('truncate')}>Name</span>
                        <ButtonIcon
                          flavor="icon-bare"
                          sprite="utility"
                          symbol="arrowdown"
                          assistiveText="Sort" />
                      </th>
                      <th scope="col"><span className={pf('truncate')}>Product Code</span></th>
                      <th scope="col"><span className={pf('truncate')}>List Price</span></th>
                      <th scope="col"><span className={pf('truncate')}>Product Family</span></th>
                      <th scope="col" className={pf('cell-shrink')}>
                        <ButtonIcon
                          flavor="icon-border-filled,icon-small"
                          sprite="utility"
                          symbol="add"
                          assistiveText="Add all Products" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={pf('hint-parent')}>
                      <th data-label="name" scope="row">
                        <MediaObject figureLeft={image1} flavor="center">
                          <a href="#void" className={pf('truncate')}>
                            Analytics Cloud
                          </a>
                        </MediaObject>
                      </th>
                      <td data-label="Product Code"><span className={pf('truncate')}>ANLTY</span></td>
                      <td data-label="List Price"><span className={pf('truncate')}>2750.00</span></td>
                      <td data-label="Product Family"><span className={pf('truncate')}>Family A</span></td>
                      <td className={pf('row-action')}>
                        <ButtonIcon
                          flavor="icon-border-filled,icon-small"
                          iconFlavor="hint"
                          sprite="utility"
                          symbol="add"
                          assistiveText="Add Product" />
                      </td>
                    </tr>
                    <tr className={pf('hint-parent')}>
                      <th data-label="name" scope="row">
                        <MediaObject figureLeft={image2} flavor="center">
                          <a href="#void" className={pf('truncate')}>
                            Beta Product
                          </a>
                        </MediaObject>
                      </th>
                      <td data-label="Product Code"><span className={pf('truncate')}>MRKT</span></td>
                      <td data-label="List Price"><span className={pf('truncate')}>3460.00</span></td>
                      <td data-label="Product Family"><span className={pf('truncate')}>Family B</span></td>
                      <td className={pf('row-action')}>
                        <ButtonIcon
                          flavor="icon-border-filled,icon-small"
                          iconFlavor="hint"
                          sprite="utility"
                          symbol="add"
                          assistiveText="Add Product" />
                      </td>
                    </tr>
                    <tr className={pf('hint-parent')}>
                      <th data-label="name" scope="row">
                        <MediaObject figureLeft={image3} flavor="center">
                          <a href="#void" className={pf('truncate')}>
                            Mobile Suite
                          </a>
                        </MediaObject>
                      </th>
                      <td data-label="Product Code"><span className={pf('truncate')}>SRVC</span></td>
                      <td data-label="List Price"><span className={pf('truncate')}>2230.00</span></td>
                      <td data-label="Product Family"><span className={pf('truncate')}>Family B</span></td>
                      <td className={pf('row-action')}>
                        <ButtonIcon
                          flavor="icon-border-filled,icon-small"
                          iconFlavor="hint"
                          sprite="utility"
                          symbol="add"
                          assistiveText="Add Product" />
                      </td>
                    </tr>
                    <tr className={pf('hint-parent')}>
                      <th data-label="name" scope="row">
                        <MediaObject figureLeft={image4} flavor="center">
                          <a href="#void" className={pf('truncate')}>
                            Connectors
                          </a>
                        </MediaObject>
                      </th>
                      <td data-label="Product Code"><span className={pf('truncate')}>CLASS</span></td>
                      <td data-label="List Price"><span className={pf('truncate')}>750.00</span></td>
                      <td data-label="Product Family"><span className={pf('truncate')}>Family B</span></td>
                      <td className={pf('row-action')}>
                        <ButtonIcon
                          flavor="icon-border-filled,icon-small"
                          iconFlavor="hint"
                          sprite="utility"
                          symbol="add"
                          assistiveText="Add Product" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={pf('col col-rule--left size--4-of-12 theme--shade p-around--medium has-divider--left scrollable--y')}>
              <h4 className={pf('m-bottom--medium text-heading--small')}>Selected Products (0)</h4>
              <ul className={pf('list--vertical has-cards--space')}>
                <li className={pf('list__item theme--default')}>
                  <MediaObject figureLeft={imageEmpty} flavor="center">
                    Click + to add a product
                  </MediaObject>
                </li>
              </ul>
            </div>
          </Modal.Body>

          <Modal.Footer flavor="directional">
            <Button flavor="neutral">Cancel</Button>
            <Button flavor="neutral,brand">Next</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default <ModalExample/>;

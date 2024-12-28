import { useState } from 'react'
import './assets/all.scss';
import { products } from './data/data';
function App() {
  const [currentProductId, setCurrentProductId] = useState(null);
  const currentProduct = currentProductId
    ? products.find(product => product.id === currentProductId)
    : null;
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className='fs-4 mb-3'>產品列表</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">產品名稱</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">是否啟用</th>
                <th scope="col">查看細節</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product => {
                  return (
                    <tr key={product.id}>
                      <th scope="row">{product.title}</th>
                      <td>{product.origin_price}</td>
                      <td>{product.price}</td>
                      <td>{product.is_enabled ? '啟用' : '未啟用'}</td>
                      <td>
                        <button className='btn btn-primary'
                          onClick={() => setCurrentProductId(product.id)}>
                          查看
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h2 className='fs-4 mb-3'>單一產品細節</h2>
          {
            currentProduct ? (
              <div className="card">
                <img src={currentProduct.imageUrl}
                  className="card-img-top object-fit-contain"
                  height={300}
                  alt={currentProduct.title} />
                <div className="card-body">
                  <h3 className='fs-4 mb-3'>
                    {currentProduct.title}
                    <span className="badge text-bg-primary ms-3">
                      {currentProduct.category}
                    </span>
                  </h3>
                  <p>商品描述: {currentProduct.category}</p>
                  <p>商品內容: {currentProduct.content}</p>
                  <p>
                    <span className='me-1 text-decoration-line-through text-secondary'>
                      {currentProduct.origin_price} 元
                    </span>/
                    <span className='ms-1'>{currentProduct.price} 元</span>
                  </p>
                  <p>更多圖片：</p>
                  <div className="d-flex flex-wrap">
                    {
                      currentProduct?.imagesUrl?.map(img => {
                        return (
                          <img key={img}
                            className='object-fit-contain'
                            height={150}
                            src={img}
                            alt={img} />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            ) : (
              <p>請選擇要查看的商品</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App

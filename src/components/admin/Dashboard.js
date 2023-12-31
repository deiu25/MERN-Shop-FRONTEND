import "../../App.css"
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { MetaData } from '../leyout/MetaData'
import { Loader } from '../leyout/Loader'
import { useDispatch, useSelector } from 'react-redux'

import { getAdminProducts } from '../../actions/productActions'
import { allOrders } from '../../actions/orderActions'
import { allUsers } from "../../actions/userActions"

export const Dashboard = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products)
    const { users } = useSelector(state => state.allUsers)
    const { orders, totalAmount, loading } = useSelector(state => state.allOrders)

    let outOfStock = 0;
    products.forEach(product => {
        if(product.stock === 0) {
            outOfStock += 1;
        }
    })

    useEffect(() => {
        dispatch(getAdminProducts())
        dispatch(allOrders())
        dispatch(allUsers())
    }, [dispatch])

  return (
    <>
        <div className="row">
            <div className="col-12 col-md-2 sidebar-no-margin">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <h1 className="my-4">Dashboard</h1>

                {loading ? <Loader /> : (
                    <>
                        <MetaData title={'Admin Dashboard'} />
                <div className="row pr-4">
                    <div className="col-xl-12 col-sm-12 mb-3">
                        <div className="card text-white bg-primary o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Total Amount<br /> <b>${totalAmount && totalAmount.toFixed(2)}</b><br /> <span className="font-size-20">Orders</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pr-4">
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Products<br /> <b>{products && products.length}</b><br /> <span className="font-size-20">Products</span></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Orders<br /> <b>{orders && orders.length}</b><br /> <span className="font-size-20">Orders</span></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-info o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Users<br /> <b>{users && users.length}</b><br /> <span className="font-size-20">Users</span></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-warning o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Out of Stock<br /> <b>56</b><br /> <span className="font-size-20">Products</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h1 className="my-4">New Orders</h1>

                <div className="row pr-4">
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-primary o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">New<br /> <b>56</b><br /> <span className="font-size-20">Orders</span></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Processing<br /> <b>56</b><br /> <span className="font-size-20">Orders</span></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Delivered<br /> <b>456</b><br /> <span className="font-size-20">Orders</span></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-info o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Cancelled<br /> <b>56</b><br /> <span className="font-size-20">Orders</span></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/orders">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 className="my-4">Latest Products</h1>

                <div className="row pr-4">
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-primary o-hidden h-100">
                            <div className="card-body">
                                <img className="img-fluid" src="https://res.cloudinary.com/shopit/image/upload/v1606323577/products/earphone.jpg" alt=''/>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <img className="img-fluid" src="https://res.cloudinary.com/shopit/image/upload/v1606323577/products/earphone.jpg" alt=''/>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <img className="img-fluid" src="https://res.cloudinary.com/shopit/image/upload/v1606323577/products/earphone.jpg" alt=''/>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-info o-hidden h-100">
                            <div className="card-body">
                                <img className="img-fluid" src="https://res.cloudinary.com/shopit/image/upload/v1606323577/products/earphone.jpg" alt=''/>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/products">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                    </>
                )}
            </div>
        </div>
    </>
    )   
}

import React from 'react'
import BlogData from './BlogData'
import './Blog.css'
import Card from './Card'

const Blog = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center blog-heading">Our Blogs</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                BlogData.map((elem) => {
                                    return (
                                        <Card
                                        key={elem.id}
                                        imgsrc={elem.imgsrc}
                                        title={elem.name}
                                        about={elem.desc}
                                        visit={elem.visit} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog

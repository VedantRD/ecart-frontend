import React from 'react'

const CategoryCard = () => {
    return (
        <div className='row no-gutters'>
            <div className='col-4'>
                <img src='https://images.macrumors.com/t/jXqUxBjwyt16A254unbNN51zn9A=/1920x/https://images.macrumors.com/article-new/2019/02/MR-Future-Products-2020-2.png' alt='product' className='img-fluid w-100 h-100' style={{ height: '25%' }}></img>
            </div>
            <div className='col-8'>
                <div class="card h-100 border-left-0">
                    <div class="card-body">
                        <h5 class="card-title">Smart TV</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Latest Models</h6>
                        <p class="card-text">Hurry up and get exclusive benefits on all models for limited time.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryCard

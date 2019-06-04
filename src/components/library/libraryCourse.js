import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusamus hic distinctio tempore fugiat et dolores molestias vero! Beatae sapiente nulla esse! Eligendi reiciendis tenetur corrupti culpa ad cum aliquam!</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse
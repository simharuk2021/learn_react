import React, { Component } from "react";


class Jumbotron extends Component {
    render() {
        return(
<div class="jumbotron">
<h1 class="display-4">Hello, world!</h1>
<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
<a class="btn btn-info btn-lg" href="#" role="button">Learn more</a>
</div>   
        );
    }
}

export default Jumbotron;
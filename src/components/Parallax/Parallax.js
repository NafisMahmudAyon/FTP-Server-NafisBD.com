import './Parallax.css'
import Hill1 from '../../img/hill1.png'
import Hill2 from '../../img/hill2.png'
import Hill3 from '../../img/hill3.png'
import Hill4 from '../../img/hill4.png'
import Hill5 from '../../img/hill5.png'
import Tree from '../../img/tree.png'
import Leaf from '../../img/leaf.png'
import Plant from '../../img/plant.png'

import React from 'react'

const Parallax = () => {
    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.style.marginTop = value * 1.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 0.5 + 'px';
    });


  return (
    <div>
        <section className='parallax'>
            <img src={ Hill1 } id='hill1' alt='' />
            <img src={ Hill2 } id='hill2' alt='' />
            <img src={ Hill3 } id='hill3' alt='' />
            <img src={ Hill4 } id='hill4' alt='' />
            <img src={ Hill5 } id='hill5' alt='' />
            <img src={ Tree } id='tree' alt='' />
            <img src={ Leaf } id='leaf' alt='' />
            <img src={ Plant } id='plant' alt='' />
        </section>
    </div>
  )
}

export default Parallax
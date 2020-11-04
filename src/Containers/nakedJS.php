<?php

namespace nakedJS\Containers;

use Plenty\Plugin\Templates\Twig;

class nakedJS
{
    public function call(Twig $twig):string
    {
        return $twig->render('nakedJS::nakedJS');
    }
}

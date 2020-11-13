<?php

namespace nakedJS\Providers;

use IO\Extensions\Functions\Partial;
use IO\Helper\CategoryKey;
use IO\Helper\CategoryMap;
use IO\Helper\TemplateContainer;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ConfigRepository;
use IO\Helper\ComponentContainer;
use Plenty\Modules\Webshop\Template\Providers\TemplateServiceProvider;

class nakedJSServiceProvider extends TemplateServiceProvider
{
 const EVENT_LISTENER_PRIORITY = 99;
    /**
     * Register the service provider.
     */

    public function register() {

    }

    public function boot(Dispatcher $dispatcher)
    {

           $this->overrideTemplate("Ceres::PageDesign.PageDesign", "nakedJS::PageDesign.PageDesign");
           // $this->overrideTemplate("Ceres::PageDesign.Partials.Head", "nakedJS::PageDesign.Partials.Head");

    }
}

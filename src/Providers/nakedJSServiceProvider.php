<?php

namespace nakedJS\Providers;


use IO\Extensions\Functions\Partial;
use IO\Helper\CategoryKey;
use IO\Helper\CategoryMap;
use IO\Helper\TemplateContainer;
use IO\Helper\ComponentContainer;
use IO\Helper\ResourceContainer;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ConfigRepository;
use Plenty\Modules\Webshop\Template\Providers\TemplateServiceProvider;
use Plenty\Modules\Webshop\ItemSearch\Helpers\ResultFieldTemplate;

class nakedJSServiceProvider extends TemplateServiceProvider
{
 const EVENT_LISTENER_PRIORITY = 100;
    /**
     * Register the service provider.
     */

    public function register() {

    }

    public function boot(Dispatcher $dispatcher)
    {

       $this->overrideTemplate("Ceres::PageDesign.PageDesign", "nakedJS::PageDesign.PageDesign");


       $dispatcher->listen("IO.Resources.Import", function(ResourceContainer $container)
        {
              //$container->addScriptTemplate('nakedJS::Basket.Components.BasketListItem');
        },0);


        $templateContainer = pluginApp(ResultFieldTemplate::class);

        $templateContainer->setTemplates(
            [
                ResultFieldTemplate::TEMPLATE_LIST_ITEM => 'nakedJS::ResultFields.ListItem',
                ResultFieldTemplate::TEMPLATE_SINGLE_ITEM => 'nakedJS::ResultFields.SingleItem'
            ]
        );
  }
}

<?php
namespace MyTheme\Core\Model\Config\Source;

class Color implements \Magento\Framework\Option\ArrayInterface
{
    public function toOptionArray()
    {
        return [
            ['value' => NULL, 'label' => __('None')],
            ['value' => 'black', 'label' => __('Black')],
            ['value' => 'white', 'label' => __('White')],
            ['value' => 'grey', 'label' => __('Grey')]
        ];
    }
}

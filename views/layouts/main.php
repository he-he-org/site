<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use app\assets\AppAsset;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\helpers\Url;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
</head>
<body>
    <?php $this->beginBody() ?>

    <main>
        <div class="layout-container">
            <div class="layout-fields">
                <header class="layout-header">
                    <img src="/images/logo.png"/>

                    <div class="layout-header_right">
                        <div class="layout-header_languages">
                            <div class="layout-header_languages-item">Ru</div>
                            <div class="layout-header_languages-item">En</div>
                            <div class="layout-header_languages-item">Es</div>
                        </div>
                        <div class="layout-header_social-networks">
                            <div class="layout-header_social-networks_title">
                                Мы в социальных сетях
                            </div>
                            <div class="layout-social-networks">
                                <i class="fa fa-facebook layout-social-networks_item" aria-hidden="true"></i>
                                <i class="fa fa-twitter layout-social-networks_item" aria-hidden="true"></i>
                                <i class="fa fa-instagram layout-social-networks_item" aria-hidden="true"></i>
                                <i class="fa fa-vk layout-social-networks_item" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </header>

                <div class="row layout-menu-row">
                    <div class="layout-navigation-menu row_block-8">
                        <a class="layout-navigation-menu_item layout-navigation-menu_item--active" href="<?=Url::to(['/main'])?>">О нас</a>
                        <a class="layout-navigation-menu_item" href="<?=Url::to(['/help'])?>">Помочь проекту</a>
                        <a class="layout-navigation-menu_item" href="<?=Url::to(['/volunteers'])?>">Стать волонтером</a>
                        <a class="layout-navigation-menu_item" href="<?=Url::to(['/news'])?>">Новости</a>
                        <a class="layout-navigation-menu_item" href="<?=Url::to(['/contacts'])?>">Контакты</a>
                    </div>
                    <div class="layout-search"><i class="fa fa-search" aria-hidden="true"></i> <input placeholder="Поиск..." /></div>
                </div>
                <div class="layout-content">
                    <?= $content ?>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div class="layout-footer">
            <div class="layout-fields">
                <div class="row">
                    <div class="layout-footer_links-block row_block-3">
                        <div class="layout-footer_links-block_header">Задачи</div>
                        <div class="layout-footer_links-block_item">Строительство клиники</div>
                        <div class="layout-footer_links-block_item">Медикаменты</div>
                        <div class="layout-footer_links-block_item">Продукты питания</div>
                        <div class="layout-footer_links-block_item">Строительство водопровода</div>
                    </div>
                    <div class="layout-footer_links-block row_block-3">
                        <div class="layout-footer_links-block_header">О проекте</div>
                        <div class="layout-footer_links-block_item">Новости</div>
                        <div class="layout-footer_links-block_item">Наши спецпроекты</div>
                        <div class="layout-footer_links-block_item">Команда проекта</div>
                        <div class="layout-footer_links-block_item">История создания</div>
                        <div class="layout-footer_links-block_item">На что мы тратим деньги</div>
                    </div>
                    <div class="layout-footer_links-block row_block-3">
                        <div class="layout-footer_links-block_header">Как помочь</div>
                        <div class="layout-footer_links-block_item">Внести пожертвование</div>
                        <div class="layout-footer_links-block_item">Стать волонтером</div>
                        <div class="layout-footer_links-block_item">Отправить посылку</div>
                        <div class="layout-footer_links-block_item">Рассказать в соцсетях</div>
                        <div class="layout-footer_links-block_item">Написать нам</div>
                    </div>
                    <div class="row_block-3">
                        <div class="layout-social-networks">
                            <i class="fa fa-facebook layout-social-networks_item" aria-hidden="true"></i>
                            <i class="fa fa-twitter layout-social-networks_item" aria-hidden="true"></i>
                            <i class="fa fa-instagram layout-social-networks_item" aria-hidden="true"></i>
                            <i class="fa fa-vk layout-social-networks_item" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
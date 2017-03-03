<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\ContactForm;

class BackstageController extends Controller
{
     public function actionIndex()
    {
        return $this->render('index');
    }
     public function actionOrder()
    {
        return $this->render('order');
    }
     public function actionCoupon()
    {
        return $this->render('coupon');
    }
     public function actionDirectseeding()
    {
        return $this->render('directseeding');
    }
     public function actionIntercalate()
    {
        return $this->render('intercalate');
    }
}
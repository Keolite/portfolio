<?php

namespace App\Controller\Dashboard;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/ebs-admin/categorie")
 */
class CategoryController extends AbstractController
{
    /**
     * @Route("/", name="dashboard_category")
     */
    public function index()
    {
        return $this->render('dashboard/category/index.html.twig', [
            'controller_name' => 'categoryController',
        ]);
    }
}

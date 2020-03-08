<?php

namespace App\Controller\Dashboard;

use App\Entity\Category;
use App\Form\CategoryType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/ebs-admin/categorie")
 */
class CategoryController extends AbstractController
{
    /**
     * @Route("/", name="dashboard_category")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $category = new Category();

        $form = $this->createForm(CategoryType::class, $category);

        return $this->render('dashboard/category/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

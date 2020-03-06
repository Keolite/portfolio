<?php

namespace App\Controller\Dashboard;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/ebs-admin")
 */
class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="dashboard_default")
     */
    public function index()
    {
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}

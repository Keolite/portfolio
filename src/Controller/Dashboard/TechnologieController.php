<?php

namespace App\Controller\Dashboard;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/ebs-admin/technologie")
 */
class TechnologieController extends AbstractController
{
    /**
     * @Route("/", name="dashboard_technologie")
     */
    public function index()
    {
        return $this->render('dashboard/technologie/index.html.twig', [
            'controller_name' => 'TechnologieController',
        ]);
    }
}

package kodlamaio.northwind.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.northwind.business.abstracts.ProductService;
import kodlamaio.northwind.business.concretes.ProductManager;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import kodlamaio.northwind.entities.abstracts.Product;
import kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;

@RestController
@RequestMapping("/api/products/")
public class ProductsController {

	private ProductService productService;

	@Autowired
	public ProductsController(ProductService productService) {
		this.productService = productService;
	}

	@GetMapping("getall")
	public DataResult<List<Product>> getAll() {
		return productService.getAll();
	}

	@PostMapping("add")
	public Result add(Product product) {
		return this.productService.add(product);
	}

	@GetMapping("getByProductName")
	public DataResult<Product> getByProductName(@RequestParam String productName) {
		return productService.getByProductName(productName);
	}

	@GetMapping("getByProductNameAndCategoryId")
	public DataResult<Product> getByProductNameAndCategoryId(@RequestParam("productName") String productName,
			@RequestParam("categoryId") int categoryId) {

		return this.productService.getByProductNameAndCategory(productName, categoryId);
	}

	@GetMapping("getByProductNameContains")
	public DataResult<List<Product>> getByProductNameContains(@RequestParam String productName) {
		return this.productService.getByProductNameContains(productName);
	}

	@GetMapping("getallbypage")
	public DataResult<List<Product>> getAll(int pageNumber, int pageSize) {
		return this.productService.getAll(pageNumber, pageSize);
	}

	@GetMapping("getallsorted")
	public DataResult<List<Product>> getAllSorted() {
		return this.productService.getAllSorted();
	}
	@GetMapping("getallWithCategoryDetail")
	public DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetail(){
		return this.productService.getProductWithCategoryDetails();
	}
}

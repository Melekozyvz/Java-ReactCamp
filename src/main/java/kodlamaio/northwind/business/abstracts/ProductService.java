package kodlamaio.northwind.business.abstracts;

import java.util.List;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.entities.abstracts.Product;
import kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;

public interface ProductService {
	
	DataResult<List<Product>> getAll();
	
	DataResult<List<Product>> getAllSorted();

	DataResult<List<Product>> getAll(int pageNumber,int pageSize);

	Result add(Product product);
	
	DataResult<Product> getByProductName(String productName);

	DataResult<Product> getByProductNameAndCategory(String productName,int categoryId);
	
	DataResult<List<Product>> getByProductNameOrCategory(String productName,int categoryId);

	DataResult<List<Product>> getByCategoryIn(List<Integer> categoryId);
	
	DataResult<List<Product>> getByProductNameContains(String productName);
	
	DataResult<List<Product>> getByProductNameStartsWith(String productName);
	
	DataResult<List<Product>> getByNameAndCategory(String productName,int categoryId);
	
	DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails();

	
}
